var mysql =require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'stora'
})

module.exports = con