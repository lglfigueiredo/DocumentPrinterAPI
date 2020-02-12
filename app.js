const express = require('express');
const app = express();

const indexWord = require('./Routes/Word/word.js');
const indexPdf = require('./Routes/PDF/pdf.js');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/Utils/Printer/Word', indexWord);

app.listen(3000);

console.log('ligado');