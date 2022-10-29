const express = require('express')
const cors =require ('cors')
const app = express()
app.use(cors('*'))
const port = process.env.PORT||4000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.get('/',(req,res)=>{
    res.json({
        slackUsername:"deverence",
        backend:true,
        age:27,
        bio:"a fullstack MERN stack web developer trying to build more node.js muscle"
    })
})
