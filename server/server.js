const express = require('express');
const bodyParser = require('body-parser');
// const passport = require('passport');

require('./db/conn');


const users = require('./routes/auth');
const device = require('./routes/device');
// const slotBook = require('./routes/slotBook');

const app = express();

// app.use(express.static('public'));  
// app.use('/images', express.static('images')); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(passport.initialize());
// require('./middleware/passport')(passport);

app.use('/api/users', users);
app.use('/api', device);
// app.use('/api', slotBook);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
   
    console.log(`Server is running on PORT ${PORT}`);
});