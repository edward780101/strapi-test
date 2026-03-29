import type { Schema, Struct } from '@strapi/strapi';

export interface ProfileLink extends Struct.ComponentSchema {
  collectionName: 'components_profile_links';
  info: {
    description: 'Social / action link for the profile page';
    displayName: 'Profile link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['instagram', 'medium', 'linkedin']> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profile.link': ProfileLink;
    }
  }
}
