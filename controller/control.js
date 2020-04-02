const express = require('express')
//const model = require('../models/dbconnect')
var mysql =require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'stora'
})
//const connection = model.con

module.exports=(app)=>{
app.get('/store',async(req,res)=>{
    await con.query("SELECT * FROM store",function(err,result){
        res.send(result)
    })})

app.post('/store',async(req,res)=>{
    const rname = req.body.reckname
    const rnum = req.body.recknum
    const cname = req.body.clientname
    var sql = {
        reckname:rname,
        recknum:rnum,
        clientname:cname
    }
    await con.query("INSERT INTO store SET ? ",sql,(err,result)=>{
        res.send(result)
    })
})

app.patch('/store/:id',async(req,res)=>{
    const rname = req.body.reckname
    const rnum = req.body.recknum
    const cname = req.body.clientname
    var sql = {
        reckname:rname,
        recknum:rnum,
        clientname:cname
    }
    await con.query("UPDATE store SET ? WHERE id='"+req.params.id+"'",sql,(err,result)=>{
        res.send(result)
    })
})


}