const con = require('../../../models/dbconnect')

//get requests
var get = async(req,res)=>{
    try {
        await con.query("SELECT * FROM Products",function(err,result){
            if(err){
                throw err
            }
            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }
}

var delte = async(req,res)=>{
    try {
        if(!req.params.id){
            console.log("product doesn't exist")
        }
        await con.query("DELETE FROM Products WHERE product_id='"+req.params.id+"'",(err,result)=>{
            if(err){
                throw err
            }
            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }
}

//post requests

var post = async(req,res)=>{
    try {

        var sql = {
            product_name:req.body.product_name,
            Manuf_date:req.body.Manuf_date,
            supplier_id:req.body.supplier_id
        }

        await con.query("INSERT INTO Products SET ? ",sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result);
    })
    } catch (error) {
        console.log(error)   
    }
}

//update

var update = async (req,res) => {
    try {
        var sql = {
            product_name: req.body.productName,
            supplier_id: req.body.supplierId
        }
    
        Object.keys(sql).forEach((key, index) => {
            if(!sql[key]) delete sql[key]
        });

    
        await con.query(`UPDATE Products SET ? WHERE product_id = ${req.params.id}`, sql, (err,result)=>{
            if(err){
                throw err
            }
            res.send(result)
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    update,
    get,
    delte
}