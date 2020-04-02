const express = require('express')
const app = express()
const econtrol = require('./controller/control')
const port  = process.env.PORT || 8000

app.use(express.json())


econtrol(app)

app.listen(port,()=>{
     console.log(`app is listening on port ${port}`)
 })