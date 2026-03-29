import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::profile-page.profile-page' as Parameters<typeof factories.createCoreController>[0]
);
