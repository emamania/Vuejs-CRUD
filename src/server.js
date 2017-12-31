const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const itemRoutes = require('./routes/item');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mevn-stack', {
  useMongoClient: true
}).then(() => console.log('db connected'))
.catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000 );

//Middlewres
app.use(cors());
app.use(bodyParser.json());

//routes ---rest api
app.use('/item', itemRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
