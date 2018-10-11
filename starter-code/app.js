const express = require ('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.get('/', (req, res) => {
    const isLogged = true;
    const name = "Paquito";
    const title = 'Mi título';
    const num = 2;
    const obj = {
        prop: 'cosilla',
    };
    const arr = [1,2,3,4];
    const objetoAPasar = {
        title: title,
        number: num,
        obj: obj,
        array: arr,
        isLogged: isLogged,
        name: name,
    }

    res.render('index', objetoAPasar);
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
});
app.listen(port, (error) => {
    error ? console.log(error) : console.log('running on 3000');
})