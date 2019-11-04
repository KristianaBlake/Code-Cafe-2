const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

app.use(methodOverride('_method'));//must come before our routes
app.use(bodyParser.urlencoded({extended: false}));

const userController = require('./controllers/review.js')
app.use('/review', reviewController);

const userController = require('./controllers/user.js');
app.use('/user', userController);

// home page
app.get('/',(req, res) => {
  res.render('home.ejs')
});


app.listen(3000, () => {
	console.log('server is listening on port', 3000);
})