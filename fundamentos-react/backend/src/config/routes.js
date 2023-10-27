const express = require('express')

module.exports=function(server){
    //API Roues
    const router = express.Router()
    server.use('/api'.router)

    //TODO Routes
    const todoService = require('../api/todo/todoservice')
    todoService.register(router,'/todos')
}