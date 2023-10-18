const express = require('express')
const appex = express()
require('dotenv').config();
const port=process.env.PORT;

//servir un contenido estatico
appex.use(express.static('public'));
appex.get('/index.html', function (req, res) {
  res.send('Home page')
});
appex.get('/index.html', function (req, res) {
  res.send('Hello World con su ruta gg')

});
appex.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/404.htm')
  
  });
appex.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
