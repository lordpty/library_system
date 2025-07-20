const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const port = 3000;

// Serve static files (CSS, JS, images) from public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'img' ,'favicon.png')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Serve Bootstrap CSS/JS and Popper from node_modules via static paths
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/popper', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));


const booksRouter = require('./routes/books'); // Adjust path as needed
app.use('/api', booksRouter);

// Route to serve the landing page
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/books', (req, res) => {
  res.render('books');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

// Start Express server
app.listen(port, () => {
  console.log(`Library Book Management System app listening at http://localhost:${port}`);
});
