var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var guitarRouter = require('./routes/guitar');
var gridRouter = require('./routes/grid');
var randomitemRouter=require('./routes/pick');
var app = express();
app.get('/grid', (req, res) => {
  let query = req.query;
  console.log(`Rows: ${query.rows}`);
  console.log(`Cols: ${query.cols}`);
  res.render('grid', { title: 'Grid Display', query: query });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var resourceRouter = require('./routes/resource');
app.use('/resource', resourceRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/guitar', guitarRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', randomitemRouter);
app.get('/sudha', async (req, res) => {
  try {
      const costumes = await Costume.find();
      res.render('sudha', { costumes: costumes });
  } catch (err) {
      res.status(500).send(`Error fetching data: ${err}`);
  }
});
app.set('view engine', 'pug');
app.set('views', './views');

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

var Costume = require('./models/costume.js');


async function recreateDB() {
  
  await Costume.deleteMany();

  let instance1 = new Costume({
      costume_type: "ghost",
      size: 'large',
      cost: 15.4
  });

  let instance2 = new Costume({
      costume_type: "vampire",
      size: 'medium',
      cost: 20.0
  });

  let instance3 = new Costume({
      costume_type: "witch",
      size: 'small',
      cost: 12.5
  });

  await instance1.save()
      .then(doc => console.log("First object saved"))
      .catch(err => console.error(err));

  await instance2.save()
      .then(doc => console.log("Second object saved"))
      .catch(err => console.error(err));

  await instance3.save()
      .then(doc => console.log("Third object saved"))
      .catch(err => console.error(err));
}

let reseed = true;
if (reseed) {
  recreateDB();
}

module.exports = app;
