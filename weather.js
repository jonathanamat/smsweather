var request = require('request');

request({
  url: 'https://api.darksky.net/forecast/' + process.env.DARK_SKY_TOKEN + '/29.1872,-82.1401',
  method: 'GET'
}, function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  var weatherData = JSON.parse(body);
  console.log('Temperature:', weatherData.currently.temperature, 'Currently:', weatherData.currently.summary); 
}); 

