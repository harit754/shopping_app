const route=require('express').Router()

const Product=require('../../db').Product




route.get('/',(req,res)=>{
    //get all products
    //findAll is a promise return products(array)
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products);
        }).catch((err)=>{
        res.status(500).send({
            error:"products could not retrieve"
        })
    })
})

route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"price is not valid"
        })
    }

    //add new product
    Product.create({
        name:req.body.name,
        price:parseFloat(req.body.price),
        manufacturer:req.body.manufacturer
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({
            error:"product didnt add"
        })
    })

})




exports=module.exports={
    route
}
