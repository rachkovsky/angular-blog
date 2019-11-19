//Install express server
const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const {
  Client
} = require('pg');

const client = new Client({
  connectionString: 'postgres://...',
  ssl: true
});

client.connect(() => {
  console.log('Database connected');
});



// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-blog'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/angular-blog/index.html'));

});


app.post('/api/test', function (req, res) {
  console.log('-------- ', req.body);
  client.query(
    `SELECT * from article`, (err, response) => {
    if (err) {
      console.log('err')
    }
    console.log('++++ ', response.rows);
    res.send(JSON.stringify(response.rows[0]));

  });
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('Server run on 8080 port');
});

