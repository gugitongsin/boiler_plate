//express
const express = require('express')
const app = express();
const port = 987;

//mongoose
const config = require('./config/key')
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected....')).catch(err => console.log(err))

//models
const { User } = require('./models/user')

//body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}))   //application/x-www-form-urlencoded
app.use(bodyParser.json());                         //application/json


var txt = 'Hello , How are you';
//get
app.get('/', (req, res) => res.send(`${txt}`))

//post
app.post('/register', (req,res) => {
    const user = new User(req.body);
    user.save((err, doc) =>{
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success: true
        })
    })
})

//listen
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))




