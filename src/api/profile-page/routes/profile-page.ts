import { factories } from '@strapi/strapi';

export default factories.createCoreRouter(
  'api::profile-page.profile-page' as Parameters<typeof factories.createCoreRouter>[0]
);
