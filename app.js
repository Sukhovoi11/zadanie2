const express = require('express');
const app = express();

const PORT = 3000;

app.set('views', './views');

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


app.get('/', (req, res) => {
    res.render('home', { title: 'Strona główna', content: 'Witaj na stronie głównej!' });
});

app.get('/student', (req, res) => {
    res.render('student', { title: 'Strona studenta', content: 'Witaj na stronie studenta!' });
});
