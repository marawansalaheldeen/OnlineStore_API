var mysql =require('mysql')

const Connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'stora',
    port:3306
})

module.exports = Connection