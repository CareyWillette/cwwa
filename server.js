const express = require('express');
// const cors = require('cors');
const path = require('path');
const app = express();
// require('dotenv').config();

app.use(express.static(__dirname + '/dist/cwws'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/cwws/index.html'))
})

// console.log('%c Console listening on port: ' + location.pathname + '://' + process.env.PORT ? process.env.PORT : '8080' + ': ', 'background: #41ff6b; color: #ff4700;');

app.listen(process.env.PORT || 8080)