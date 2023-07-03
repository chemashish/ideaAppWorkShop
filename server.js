const express = require ('express');
const server_configs = require('./Configs/server.configs')
const app = express();
const mongoose = require('mongoose');
const dbConfigs = require('./Configs/db.configs')


/**
 * Logic to connect to MongoDB and create an ADMIN user
 * Need to have the mongodb up and running in your local machine
 */

mongoose.connect(dbConfigs.DB_URL);
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("DB is connected");
})


app.listen(server_configs.PORT,()=>{
    console.log(`Server is running on port number ${server_configs.PORT}`)
})

