const express=require('express');
const app=express();

app.all('/sginin',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    
    const username = req.query.username;
    const password = req.query.password;
    
    if (username === 'kfyzadmin' && password === '123456') {
        res.send('success');
    } else {
        res.send('fail');
    }
});

app.listen(8000,()=>{
    console.log('服务器启动成功');
})