const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema(
    {
        author: { 
            type: String,
            required: [true, "Author name required!"],
            minlength: [3, "Minimum length is 3 characters"] },
        theQuote: {
            type: String, 
            required: [true, "Quote required!"], 
            minlength: [10, "Minimum length of quote is 10 characters"] },
}, { timestamps: true });

mongoose.model("Quote", QuotesSchema);