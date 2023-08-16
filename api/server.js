const express = require('express');
const logger = require('morgan');
// const mongoose = require('mongoose');
const Products = require('./models/product.js');
const cors = require('cors');
require('dotenv').config();
require('./config/database.js');
const app = express();
const port = process.env.PORT || 3001; 


const corsOptions = {
    origin: "https://capstone-mern2.onrender.com",
  }


// app.use(require('./config/checkToken'));
// app.use('/api/users', require('./routes/api/users'));

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());


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

app.listen(port, ()=>{
    console.log('listening...');
});

// mongoose.connect(process.env.DB_URL)
// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongod...');
// });
