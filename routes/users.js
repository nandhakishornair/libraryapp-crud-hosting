const express = require('express'); 
 const route = express.Router();
 const Userdata = require('../model/signinmodel');
 const jwt = require('jsonwebtoken');
   username='admin';
  // password='1234';

// route.get('/',function(req,res){
    
//     Userdata.find()
//                 .then(function(books){
//                     res.send(books);
//                 });
// });

route.post('/signin',function(req,res){
   
    console.log(req.body);

    let users = {   
        name : req.body.users.name,
        email : req.body.users.email,
        username : req.body.users.username,
        password : req.body.users.password 
    }  
   let user = new Userdata(users);
   user.save();
   console.log(user)
});


// route.post('/login', (req, res) => {
//     let userData = req.body
//         if (!username) {
//           res.status(401).send('Invalid Username')
//         } else 
//         if ( password !== userData.password) {
//           res.status(401).send('Invalid Password')
//         } else {
//            let payload = {subject: username+password}
//            let token = jwt.sign(payload, 'secretKey')
//            res.status(200).send({token})
//           // res.status(200).send()
//         }
      
    // })
    // route.post('/login', (req, res) => {
    // let userData = req.body
    //     if (!username) {
    //       res.status(401).send('Invalid Username')
    //     } else 
    //     if ( password !== userData.password) {
    //       res.status(401).send('Invalid Password')
    //     } else {
    //        let payload = {subject: username+password}
    //        let token = jwt.sign(payload, 'secretKey')
    //        res.status(200).send({token})
    //       // res.status(200).send()
    //     }
      
    // })
// testingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    route.post('/login', (req, res) => {
      let pswd = req.body.password;
      let name = req.body.uname;
      console.log(pswd);
      Userdata.findOne({'username' :req.body.uname})
      .then((user)=>{
        console.log(user);
              if(!user){
                res.status(401).send('Invalid Password');
                console.log("invalid")
              }
              else if(user.password == req.body.password){
                let payload = {subject: user.username + user.password};
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({token});
              }
              else{
                res.status(401).send('Invalid Password');
              }
                })
              });
        
module.exports=route;