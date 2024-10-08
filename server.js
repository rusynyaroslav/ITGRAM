const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const {MONGODB_URI} = require('./config')


require('./models/user_model');
app.use(express.json());

app.use(require('./routes/authentication'));

mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected', ()=>{
    console.log("База даних підключена");
});

mongoose.connection.on('error',(error)=>{
    console.log("Помилка ", error);
});

app.listen(PORT, ()=> {
    console.log("Успішно");
});