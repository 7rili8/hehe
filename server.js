const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

mongoose.connect('mongodb+srv://root:root@cluster0.78peij4.mongodb.net/test');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})

app.get('/',(req,res)=>{
    res.render('index');
})

const user = require('./models/users');

app.post('/info', async (req,res)=>{
    try{
        const newUser = new user(req.body);
        await newUser.save();
    
        const name = req.body.name;
        const age = req.body.age;
        const alive = req.body.alive;

        res.status(201).render('info',{name:name,age:age,alive:alive});
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
    
});

app.get('/datalist', async (req,res)=>{
    try{
        const data = await user.find({});
        res.render('datalist',{user:data});
    }catch(error){

    }
    
})