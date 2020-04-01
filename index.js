const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars'); 
const logger = require('./middleware/Logger');
const members = require('./Members');

const app = express();

// to use the body parser in express(middleware)
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//route for new homepage
app.get('/', (req,res) => res.render('index', {
    title: 'Member Application',
    members
}));
// handlebars middleare
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//initialise middleware
app.use(logger);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));