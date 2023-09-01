const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'MobiCash Bank API',
      version: '1.0.0',
      description: 'Documentation for MobiCash Bank API',
    },
    servers: [
      {
        url: 'http://161.35.172.241:3300',
        description: '',
      },
    ],
  },
  apis: ['./src/modules/accountManagement/accountManagement.route.ts'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
