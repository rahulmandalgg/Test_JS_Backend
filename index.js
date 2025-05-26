const express = require('express')
const app = express()

require('dotenv').config()


const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('Hello Twitter!')

})

app.get('/login',(req,res) => {
    res.send('<h1> Please Login Here </h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2> MERA H2 </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
