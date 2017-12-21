const Seqelize=require('sequelize')
//we are using sequelize to make  sql


const db=new Sequelize('shopdb','haritshop','shoppass',{
    host:'localhost',
    dialect:'mysql',


    pool:{
        min:0,
        max:5
    }
})

//making class of users

//(users) table is formed in the mysql database
const User=db.define('users',{
    id:{
        type:Seqelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Seqelize.STRING,
        allowNull:false
    }
})



const Product=db.define('products',{
    id:{
        type:Seqelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Seqelize.STRING,
        allowNull:false
    },
    price:{
        type:Seqelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    },
    //dafult is type
    manufacturer:Sequelize.STRING


})

db.sync()
    .then(()=>{
    console.log("data has been synced")
    }).catch((err)=>console.error("Error creating database"))


exports=module.exports={
    User,Product
}