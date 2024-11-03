const express = require('express');

const app = new express();
const PORT= 3000;




app.get('/',(req,res)=>{
res.send("hello")
}); 

app.listen(PORT,()=>{
    console.log(PORT);
});

app.delete('/del',(req,res)=>{
    
})