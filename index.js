const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(1000,()=>{
    console.log('Listening on Port 1000')
})

app.get('/', (req,res)=>{
    res.render('home')
})

app.post('/generate', (req,res)=>{
    const text= req.body.text;
    QRCode.toDataURL(text, function (err, url) {
        res.render('qrcode', {url})
      })
})