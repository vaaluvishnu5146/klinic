const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Klinic Api',
        version: '1.0.0',
        description: 'A API documentation for klinic api',
      },
      servers: [
        {
          url: 'http://localhost:3000', // Replace with your API base URL
        },
      ],
    },
    apis: ['./index.js', './modules/prescriptions/prescription.controller.js'], // Path to your API route files and main app file
  };
  
  module.exports = swaggerOptions;