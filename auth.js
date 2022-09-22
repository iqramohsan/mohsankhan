const router = require ('express').Router();
const user = require('./models/user')
var bodyParser = require('body-parser')

router.post('/register' ,(req,res)=>{


const users = new user({


    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
})

users.save( ).then(()=>{
    res.json({ success: true , message: "user succesfull register "})

}).catch((err)=>    {
    res.json({ success: false , message: "user  register fail "})

})
    
    res.json('regiter worked ')
});
router.post('./login' ,(req,res)=>{
    res.json('login worked ')
})

module.exports =router;