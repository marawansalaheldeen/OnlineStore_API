const express = require('express')
const router = new express.Router()
var mysql =require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'stora'
})

router.get('/store/supply',async(req,res)=>{
    await con.query("SELECT * FROM supplier",(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

router.post('/store/supply',async(req,res)=>{
    const su_add = req.body.supplier_address
    const su_name = req.body.supplier_name 

    var sql = {
        supplier_address:su_add,
        supplier_name:su_name
    }
    await con.query("INSERT INTO supplier SET ?",sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

router.patch('/store/supply/:id',async(req,res)=>{
    const su_add = req.body.supplier_address
    const su_name = req.body.supplier_name 

    var sql = {
        supplier_address:su_add,
        supplier_name:su_name
    }
    await con.query("UPDATE supplier SET ? WHERE supplier_id='"+req.params.id+"'",sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })

})

router.get('/store/supply/delete/:id',async(req,res)=>{
    console.log(req.params.id)
    if(!req.params.id){
        res.status(400).send("supplier not found")
    }
    await con.query("DELETE FROM supplier WHERE supplier_id='"+req.params.id+"'",(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})
module.exports = router