/**
 * Created by jonrowe on 06/03/2018.
 */
//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname, 'dist')));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
