var mysql =require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'stora'
})
////////////////////////////////
module.exports=(app)=>{
//products    
app.get('/store/products',async(req,res)=>{
    await con.query("SELECT * FROM Products",function(err,result){
        if(err){
            throw err
        }
        res.send(result)
    })
})

app.post('/store/products',async(req,res)=>{
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

app.patch('/store/products/:id',async(req,res)=>{
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
app.get('/store/product/delete/:id',async(req,res)=>{
    const _id = req.params.id
    console.log(_id)
    if(!_id){
        console.log("product doesn't exist")
    }
    await con.query("DELETE FROM Products WHERE product_id='"+req.params.id+"'",(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})
//supplier
app.post('/store/supply',async(req,res)=>{
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

app.get('/store/supply',async(req,res)=>{
    await con.query("SELECT * FROM supplier",(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

}