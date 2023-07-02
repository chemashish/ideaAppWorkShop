const express = require('express');
const server_configs =require('./Configs/server.configs')
const app = express();

app.listen(server_configs.PORT,()=>{
    console.log(`Server is running on port number ${server_configs.PORT}`)
})

