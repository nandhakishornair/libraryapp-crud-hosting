
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
// mongoose.connect('mongodb+srv://asa:NGsq6k6TxSma2xwx@cluster0.qgsdgt0.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
       
        // name : String,
        // email : String,
        // username : String,
        // password : String
        name: {
          type: String,
          unique: false
        },
        email: {
          type: String,
          unique: false
          
        },
        username: {
          type: String,
          required: true,
          unique: true
          // index: {unique:true}
        },
        password: {
          type: String,
          required: true,
          unique: false
          
        }

    });

const Userdata = mongoose.model('User',UserSchema);            

module.exports = Userdata;
