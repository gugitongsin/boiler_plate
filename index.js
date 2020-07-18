//express
const express = require('express')
const app = express();
const port = 987;
// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kjs:kjs@boiler-plate.pieiv.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected....')).catch(err => console.log(err))


var txt = 'Hello , my name is KJS';
app.get('/', (req, res) => res.send(`${txt}`))
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))


