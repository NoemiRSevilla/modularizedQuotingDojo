const mongoose = require('mongoose');

require('../models/quote');
const Quote = mongoose.model('Quote');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    add: (req, res) => {
        console.log("process of adding...")
        Quote.create(req.body)
            .then(newQuoteData => {
                console.log("adding the data: ", req.body);
                res.redirect('/quotes');
            })
            .catch(err => {
                // console.log("We have an error!", err.errors);
                for (var key in err.errors) {
                    req.flash('creation', err.errors[key].message);
                }
                res.redirect('/')
            })
    },
    quotesPage: (req,res) => {
        Quote.find().sort({ date: 'descending' })
        .then(data => {
            res.render('quotes', {allQuotes: data});
        })
        .catch(err => res.json(err))
    }
};