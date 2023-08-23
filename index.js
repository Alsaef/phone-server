const express = require('express')
const app = express()
const port = 3000
const iphone=require('./data/iphone.json')
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('my server')
})
app.get('/iphone',(req,res)=>{
  res.send(iphone)
})
app.get('/iphone/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const phone=iphone.find(phone => phone.id === id) || {}
  res.send(phone)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})