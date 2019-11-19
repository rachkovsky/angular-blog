//Install express server
const express = require('express');
const path = require('path');
const {
  Client
} = require('pg');

const app = express();

const client = new Client({
  connectionString: 'postgres://abzpwypezvpfqb:1c926030fbc5337b8063fdfe25c32bdd885ecc4d4bdf20deb2c5960f397da308@ec2-54-227-249-108.compute-1.amazonaws.com:5432/d14u63hi0e2f4g',
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
  // here will be request to DB ....
  res.send(JSON.stringify(
    [{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis"
      }
    ]
  ));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('Server run on 8080 port');
});
