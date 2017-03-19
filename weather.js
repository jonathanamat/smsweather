var request = require('request');

request({
  url: 'https://api.darksky.net/forecast/ab610bc083b2e6ffb15905373c648898/29.1872,-82.1401',
  method: 'GET'
}, function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  var weatherData = JSON.parse(body);
  console.log('Temperature:', weatherData.currently.temperature, 'Currently:', weatherData.currently.summary); 
}); 

