console.log("Hello red Hat");

var calculateSquare = function(numIn) {
    var numOut = numIn * numIn;
    return numOut;
};


var express = require('express');

var app = express();


app.get('/', (req, res) => res.send('Hello red Hat!'))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
