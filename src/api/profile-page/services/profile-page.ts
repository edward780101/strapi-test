import { factories } from '@strapi/strapi';

export default factories.createCoreService(
  'api::profile-page.profile-page' as Parameters<typeof factories.createCoreService>[0]
);
