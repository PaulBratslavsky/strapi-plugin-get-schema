import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  getStrapiSchema(ctx) {
    ctx.body = strapi
      .plugin('get-strapi-schema')
      // the name of the service file & the method.
      .service('service')
      .getStrapiSchema(ctx.params.name);
  },
});

export default controller;
