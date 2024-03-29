import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    version: '1.0.0',
    title: 'Pioneer Labs APIs',
    description: 'API for User Auth and retrieving Data',
  },
  host: 'http://localhost:8000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  apis: ['server.js', './routes/*.js'],
  tags: [
    {
      name: 'Authentication',
      description: 'Endpoints related to user authentication',
    },
    { name: 'Data Retrieval', description: 'Endpoints for retrieving data' },
  ],
  securityDefinitions: {},
  definitions: {},
};

const outputFile = './docs/swagger.json';
const endpointsFiles = ['./server.js', './controllers/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
