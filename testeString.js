const fs = require('fs');
var contentfile = fs.readFileSync('teste.json');

//arquivo puro
console.log('arquivo puro = ' + contentfile);

//arquivo convertido para string
var strcontent = contentfile.toString();
console.log('convertido para string = ' + strcontent);

//string convertodo para json
var jasoncontent = JSON.parse(contentfile);
console.log('convertido para json = ' + jasoncontent.registro[1].username);

//manipulação