const express=require('express')

const path=require('path')
const app=express()



app.use('/',express.static(path.join(__dirname,'public')))

//this will open api-->index.js
app.use('/api',require('./route/api'))





app.listen(4456,()=>{
    console.log("server started on http://localhost:4456")
})