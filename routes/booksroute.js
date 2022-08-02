const express = require('express'); 
 const router = express.Router();
 const Bookdata = require('../model/BookModel');
 const jwt = require('jsonwebtoken');
 
 function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

router.get('/',function(req,res){
    
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});

// single book

router.get('/:id',  (req, res) => {
  
    const id = req.params.id;
    Bookdata.findOne({"_id":id})
      .then((books)=>{
          res.send(books);
          console.log(books)
      });
  })

  
router.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var books = { 
        bookId:req.body.books.bookId,
        title: req.body.books.title,
        author: req.body.books.author,
        image: req.body.books.image,
        about: req.body.books.about      
        
   }       
   var book = new Bookdata(books);
   book.save();
   console.log(book)
});




router.delete('/remove/:id',(req,res)=>{
   
        id = req.params.id;
        Bookdata.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
    })
           

router.put('/update',(req,res)=>{
    console.log(req.body)
    console.log(req.body.bookId)
    id= req.body._id,
    bookId= req.body.bookId, 
    title= req.body.title,
    author= req.body.author,
    image= req.body.image,
    about= req.body.about
    Bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"bookId":bookId,
                                "title":title,
                                "author":author,
                                "image":image,
                                "about":about,}})
    
   .then(function(){
       res.send();
   })
})

module.exports=router;