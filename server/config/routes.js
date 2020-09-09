const quotes = require('../controllers/quotes');
// create an object to that contains methods for mongoose to interface with MongoDB

module.exports = (app) =>{

    app.get('/', (req, res) => quotes.index(req,res));

    app.post('/add', (req, res) => quotes.add(req,res));

    app.get('/quotes', (req, res) => quotes.quotesPage(req,res));
}