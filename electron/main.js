var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

require('../server')(false);

app.on('ready', function() {
  mainWindow = new BrowserWindow({
  "auto-hide-menu-bar": true,
  "web-preferences": {
    "node-integration": false
  },
	width: 1024,
	height: 768});

	mainWindow.loadURL('http://localhost:3017/index.html');
//  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
