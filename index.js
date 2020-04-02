const express = require('express')
const app = express()
const port  = process.env.PORT || 8000

app.use(express.json())

const econtrol = require('./controller/control')
 econtrol(app)
 app.listen(port,()=>{
     console.log(`app is listening on port ${port}`)
 })