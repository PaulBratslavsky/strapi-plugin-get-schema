import type { Core } from '@strapi/strapi';
// generate function that create a 'api::post.post' string from name 'post'

// TODO: fix type for ContentType
const generateApiString = (name: string): any => {
  return `api::${name}.${name}`;
};

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  getStrapiSchema(name: string) {
    const uid = generateApiString(name);
    const schema = strapi.contentType(uid);
    if (!schema) return { schema: 'No schema found' }
    return schema;  
  },
});

export default service;
