const Products = require('./routes/products')
const Supply = require('./routes/supply')

///////////////////////

module.exports=(app)=>{
//products    
app.use(Products)
//supplier
app.use(Supply)
}