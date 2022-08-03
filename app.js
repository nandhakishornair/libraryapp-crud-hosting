const express =require('express');
const path =require('path');
const bodyparser =require('body-parser');
const jwt = require('jsonwebtoken');
const cors =require('cors');
const app = express();

const books=require('./routes/booksroute')
const users=require('./routes/users')
// cors middleware
app.use(cors());
//  username='admin';
//  password='1234';
 

// mongodb connection check
 const mongoose = require('mongoose');
// const config = require('./config/database')
// mongoose.connect(config.database);
// mongoose.connection.on('connected',()=>{
//     console.log("connected to db"+config.database)
// })
mongoose.connect('mongodb+srv://asa:ZWiJnhqZECxuK8J9@cluster0.qgsdgt0.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.on('connected',()=>{
    console.log('mongodb connected');
});

// port
// const port =3000;
const port =process.env.PORT || 8080;

// Set static folder
// app.use(express.static(`./dist/library_app_front`));
// app.use(express.static(path.join(__dirname ,'public')))

app.use(bodyparser.json());
app.use('/books',books);
app.use('/users',users);

//Angular App Hosting Production Build
app.use(express.static(__dirname + '/dist/library_app_front'));

// For all GET requests, send back index.html (PathLocationStrategy) (Refresh Error)
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/dist/library_app_front/index.html'));
});
app.get('/',function(req,res){
    console.log("hai")
        
    });
app.listen(port,()=>{
    console.log("listening to port 3000");
});
