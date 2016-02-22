module.exports = function() {
  var express = require('express');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  var moment = require('moment');
  var app = express();
  var request = require('request');

  var isDev = true; //process.env.NODE_ENV === 'development';

  if (isDev) {
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
  }

  var dummyjson = require('dummy-json');
  var jsonTemplate = '{\
    "users": [\
      {{#repeat 1}}\
      {\
        "id": {{@index}},\
        "name": "{{firstName}} {{lastName}}",\
        "email": "{{email}}",\
        "dob": "{{date \'1900\' \'2000\' \'DD/MM/YYYY\'}}",\
        "address": "{{int 1 100}} {{street}}",\
        "city": "{{city}}"\
      }\
      {{/repeat}}\
    ],\
    "price": "${{int 0 99999 \'0,0\'}}"\
  }';

  var anotherJsonTemplate = '{\
      "name": "{{firstName}}",\
      "age": {{int 18 65}}\
    }';

  app.get('/api/data', function (req, res) {
    res.send(dummyjson.parse(jsonTemplate));
  });
  app.get('/api/mooorrreeeee', function (req, res) {
    res.send(dummyjson.parse(anotherJsonTemplate));
  });

  app.get('/api/invoke/*', function(req, res) {
    request(req.url.slice(12), function(error, response, body){
      if (!error && response.statusCode == 200) {
        res.send(body);
      } else {
        res.send(response);
      }
    })
  })

  app.use(express.static('src'));

   app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
   });
}
