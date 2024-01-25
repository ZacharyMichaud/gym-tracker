const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Set the views directory and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login/', (req, res) => {
    res.render('login');
});

app.get('/signup/', (req, res) => {
    res.render('signup');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
