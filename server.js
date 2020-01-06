const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Define DB
const db = require('./config/keys').db_dev;
//Connect to DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongo db connected'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`server started on port ${port}`));

//import routes
const postsRoute = require('./routes/posts');
app.use('/api/posts', postsRoute);
