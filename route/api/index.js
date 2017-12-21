const route=require('express').Router()


//in file system +++we use './'
route.use('/users',require('./users.js'))


route.use('/products',require('./products'))



exports=module.exports={
    route
}