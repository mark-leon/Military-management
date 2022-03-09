let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const dotenv = require("dotenv");
let bodyParser = require('body-parser');

const militaryRoute = require('./Routes/militaryRoute')
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true  }); 
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function callback () { 
  console.log("h"); 
 });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/militaries', militaryRoute)
  
  
// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
  
// 404 Error
app.use((req, res, next) => {
  res.status(404).send('Error 404!')
});
  
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});