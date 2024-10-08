const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");

router.get('/', (req,res)=>{
    res.send("Привіт!");
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    const {fullName, email, password} = req.body; // Деструктуризація об'єкта
    if(!fullName || !password || !email)
    {
        return res.status(400).json({error: "Одне або декілька з полів є порожнім"});
    }
    res.json({result: "Успішна реєстрація"});
});

module.exports = router;


