const express = require('express')
const router = new express.Router()
var mysql =require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'stora'
})

router.get('/store/products',async(req,res)=>{
    await con.query("SELECT * FROM Products",function(err,result){
        if(err){
            throw err
        }
        res.send(result)
    })
})

router.post('/store/products',async(req,res)=>{
    const product_name = req.body.product_name
    const Manuf_date = req.body.Manuf_date
    const supplier_id = req.body.supplier_id
    var sql = {
        product_name:product_name,
        Manuf_date:Manuf_date,
        supplier_id:supplier_id
    }
    await con.query("INSERT INTO Products SET ? ",sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

router.patch('/store/products/:id',async(req,res)=>{
    const product_name = req.body.product_name
    const Manuf_date = req.body.Manuf_date
    const supplier_id = req.body.supplier_id
    var sql = {
        product_name:product_name,
        Manuf_date:Manuf_date,
        supplier_id:supplier_id
    }
    await con.query("UPDATE Products SET ? WHERE product_id='"+req.params.id+"'",sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})
router.get('/store/product/delete/:id',async(req,res)=>{
    if(!req.params.id){
        console.log("product doesn't exist")
    }
    await con.query("DELETE FROM Products WHERE product_id='"+req.params.id+"'",(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

module.exports = router
