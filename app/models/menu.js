//model represents the table in the database
//database always contains the table of the name plural of the one present here

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//javascript has a naming scheme
//if the first letter is capital means that the thing that is stored is either class or constructor function

const mentSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true}
})
// this is the schema of the document in the database

const Menu = mongoose.model('Menu',mentSchema)
//name of model - 'Menu' first letter should always be capital
//name of collection created in database would be the plural of the model

 module.exports = Menu