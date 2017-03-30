let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.listen(3000);
console.log('App listening on port 3000');
