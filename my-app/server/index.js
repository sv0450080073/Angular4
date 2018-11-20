const express = require('express');
const app =express();
app.get('/',(req,res)=>res.send('Hello'));



app.post('/signin',(req,res)=>{
    res.send({message:"ok"});
});

app.listen(3000,()=>console.log('server is loading'));