
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
// mongoose.connect('mongodb+srv://asa:NGsq6k6TxSma2xwx@cluster0.qgsdgt0.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

        bookId : Number,
        title : String,
        author: String,
        image : String,
        about : String
    });

    const Bookdata = mongoose.model('Bookdata',BookSchema);            

module.exports = Bookdata;
