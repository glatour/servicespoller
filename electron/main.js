var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

require('../server')();
// var express = require('express');
// var app2 = express();
//
// app2.get('/', function (req, res) {
//  res.send('Hello World!');
// });
//
// app2.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
// });


app.on('ready', function() {
  mainWindow = new BrowserWindow({
  "auto-hide-menu-bar": true,
  "web-preferences": {
    "node-integration": false
  },
	width: 600,
	height: 400});

	mainWindow.loadURL('http://localhost:3000/index.html');
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
