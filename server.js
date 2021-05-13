const express=require('express')
const mongoose=require('mongoose')

require('dotenv').config({path:'config/.env'})

const app =express()
app.use(express.json())
mongoose.connect(process.env.URI,{
    useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false, useNewUrlParser:true},
    (err)=>{
        if (err)
        throw err
        console.log('db connected')
    }
)

app.use('/api',require('./routes/user')) 


app.listen(6000,()=>{
    console.log('Server runnig')
})