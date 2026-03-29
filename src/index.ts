import type { Core } from '@strapi/strapi';

const PROFILE_PAGE_FIND = 'api::profile-page.profile-page.find';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * Grant anonymous API access to the profile single-type so Next.js can `GET /api/profile-page`
   * without manual toggling in Admin (Users & Permissions → Public).
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      const publicRole = await strapi.db
        .query('plugin::users-permissions.role')
        .findOne({
          where: { type: 'public' },
          populate: ['permissions'],
        });

      if (!publicRole?.id) return;

      const already = publicRole.permissions?.some(
        (p: { action: string }) => p.action === PROFILE_PAGE_FIND
      );
      if (already) return;

      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action: PROFILE_PAGE_FIND,
          role: publicRole.id,
        },
      });

      strapi.log.info('[bootstrap] Public role: enabled %s', PROFILE_PAGE_FIND);
    } catch (err) {
      strapi.log.warn('[bootstrap] Could not grant profile-page.find to Public:', err);
    }
  },
};
