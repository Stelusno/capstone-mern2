const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Products = require('./models/products.js');
const cors = require('cors');

require('dotenv').config();
require('./config/database.js');

app.use(express.json());
app.use(cors());

app.post('/products', (req, res)=>{
    Products.create(req.body)
    .then((createdProduct)=>{
        res.json(createdProduct)
    })
});

app.get('/products', (req, res)=>{
    Products.find({})
    .then((foundProducts) => {
        res.json(foundProducts)
    })
});

app.delete('/products/:id', (req, res)=>{
    Products.findByIdAndRemove(req.params.id)
    .then((deletedProduct)=> {
        res.json(deletedProduct)
    })
});

app.put('/products/:id', (req, res)=>{
    Products.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedProduct)=>res.json(updatedProduct))
});

app.listen(3001, ()=>{
    console.log('listening...');
});

mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});