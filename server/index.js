const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect('mongodb://localhost:27017/blog')
.then(()=> console.log('database connected'))
.catch((err)=> console.log(err))

app.listen(4000, ()=>{
    console.log('server running')
})