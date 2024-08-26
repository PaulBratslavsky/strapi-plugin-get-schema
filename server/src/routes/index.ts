export default [
  {
    method: 'GET',
    path: '/schema/:name',
    handler: 'controller.getStrapiSchema',
    config: {  
      auth: false,  
      policies: [],  
    },  
  },
];
