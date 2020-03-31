const express = require('express');
const path = require('path');
 

const logger = require('./middleware/Logger');

const app = express();

// to use the body parser in express(middleware)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//initialise middleware
app.use(logger);


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));