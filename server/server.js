const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const passport = require('passport');
const cors = require("cors");
require('./db/conn');


const auth = require('./routes/auth');
const device = require('./routes/device');
const users = require('./routes/users');
// const slotBook = require('./routes/slotBook');

const app = express();
app.use(cors());
// app.use(express.static('public'));  
// app.use('/images', express.static('images')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable('etag');

// app.use(passport.initialize());
// require('./middleware/passport')(passport);

app.use('/api/users', auth);
app.use('/api', device);
app.use('/api', users);
// app.use('/api', slotBook);

const PORT = process.env.PORT || 8081;


app.use(express.static(path.join(__dirname, '../adminFrontend','build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../adminFrontend','build', 'index.html'));
});


app.listen(PORT, () => {
   
    console.log(`Server is running on PORT ${PORT}`);
});