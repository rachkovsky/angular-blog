//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-blog'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname,'/dist/angular-blog/index.html'));

});


app.post('/api/test', function (req, res) {
    // request to DB ....
    res.send(JSON.stringify('Response from server'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);