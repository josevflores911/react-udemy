// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb://localhost/todo')

//---------------------------------------------------------------
 const mongoose = require('mongoose')
 mongoose.Promise = global.Promise
 mongoose.connect('mongodb+srv://josevflores911:19274746@cluster0.lta12.mongodb.net/todoGit');
 const objectDb =  mongoose.connection
 objectDb.on('connected', ()=>{
     console.log('Conexion correcta a Mongo')
 })
 objectDb.on('error', ()=>{
     console.log('Erro en conexion a Mongo')
 })
 module.exports = mongoose
 //mongodb+srv://josevflores911:19274746@cluster0.lta12.mongodb.net/
 //mongodb+srv://josevflores911:<password>@cluster0.lta12.mongodb.net/