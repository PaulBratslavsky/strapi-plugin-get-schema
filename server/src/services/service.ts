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


// move this logic to frontend

// import { z, ZodObject, ZodSchema, ZodTypeAny } from 'zod';


// type Attribute = {
//   type: string;
//   [key: string]: any;
// };

// // Map the attribute type to a corresponding Zod schema
// function mapTypeToZodSchema(type: string, field: Attribute): ZodSchema<any> {
//   switch (type) {
//     case 'string':
//       return z.string();
//     case 'uid':
//       return z.string(); // Assuming 'uid' maps to 'string'
//     case 'media':
//       return z.object({
//         allowedTypes: z.array(z.enum(field.allowedTypes as [string])),
//         type: z.literal('media'),
//         multiple: z.boolean(),
//       });
//     case 'richtext':
//       return z.string(); // Treat 'richtext' as string
//     case 'datetime':
//       return z.string().datetime();
//     case 'relation':
//       return z.object({
//         relation: z.literal(field.relation),
//         target: z.literal(field.target),
//         configurable: z.boolean().optional(),
//         writable: z.boolean().optional(),
//         visible: z.boolean().optional(),
//         useJoinTable: z.boolean().optional(),
//         private: z.boolean().optional(),
//       }).optional();
//     default:
//       throw new Error(`Unsupported type: ${type}`);
//   }
// }

// // Generate the Zod schema from the attributes object
// function generateZodSchema(attributes: Record<string, Attribute>): ZodObject<any> {
//   const shape: Record<string, ZodTypeAny> = {};

//   for (const [key, value] of Object.entries(attributes)) {
//     if (typeof value === 'object' && value !== null) {
//       const type = value.type;
//       shape[key] = mapTypeToZodSchema(type, value);
//     }
//   }

//   return z.object(shape);
// }
