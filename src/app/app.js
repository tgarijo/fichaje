//const express = require('express');
//const morgan = require('morgan');
//const cors =  require('cors');
//const path = require('path');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import mongoose from 'mongoose';

const app = express();
//const uri = "mongodb+srv://snnfichaje:AIbtLI1n2bMJPfo4@snnfichajecluster0-itauk.gcp.mongodb.net/snnfichaje?retryWrites=true&w=majority";
const uri =  'mongodb://localhost:27017';

const options =  {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
    useFindAndModify: false
}
//Conexion a la db
mongoose.connect(uri, options).then (
    () => {
        console.log('Conectando a mongoDB');
    },
    err => {
        { err }
    }
);

// Variables globales
app.set('port', process.env.PORT || 3000);

// Middelware
app.use(morgan('tiny'));
app.use(cors())
app.use(express.json());

// apllication/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//app.use('/api', require('./routes'));

app.use('/api', require('./routes/user'));
// Routes
// app.get('/', (req, res)=> {
//     res.render('index.html');
// });

// Middleware para Vue.js router modo history
// Tiene que estar debajo de las rutas
const history = require('connect-history-api-fallback');
app.use(history()); // Tiene que estar antes de la ruta static
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log(`Server running port ${app.get('port')}`);
})