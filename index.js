const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

// app.use(express.static(pathToSwaggerUi))
var cors = require('cors');

app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "IAC API",
      version: '1.0.0',
    },

  },
  apis: ["index.js"],

  
};
var options = {
    explorer: true,
    swaggerOptions: {
      urls: [
       
        {
          url: 'http://localhost:6001/apispec_1.json', //http://127.0.0.1:5006/apispec.json  ttp://localhost:5000/getjson
          name: 'Template Project',

          
        },
        {
            url: 'http://localhost:6002/apispec_1.json',   //http://localhost:9000/getjson
            name: 'AWS project'
          },
          {
            url: 'http://localhost:6003/apispec_1.json',
            name: 'Azure project'
          },
          {
            url: 'http://localhost:6004/apispec_1.json',
            name: 'AWS Resource Check'
          },
          {
            url: 'http://localhost:6005/apispec_1.json',
            name: 'Azure Resource Check'
          },
      ],
      
    }
  }
  
 

const swaggerDocs = swaggerJsDoc(swaggerOptions);
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs,options));



app.listen(8200, () => console.log("listening on 8200"));


