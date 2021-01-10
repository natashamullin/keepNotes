
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// link to page ⬢ https://desolate-caverns-74158.herokuapp.com/ | https://git.heroku.com/desolate-caverns-74158.git
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//start server. keep at bottom!
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});