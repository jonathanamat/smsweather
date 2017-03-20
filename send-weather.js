	require('dotenv').config()
  var request = require('request');

request({
  url: 'https://api.darksky.net/forecast/ab610bc083b2e6ffb15905373c648898/29.1872,-82.1401',
  method: 'GET'
}, function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  var weatherData = JSON.parse(body);
  console.log('Temperature:', weatherData.currently.temperature, 'Currently:', weatherData.currently.summary, 'Rain Chance:', weatherData.currently.precipProbability); 

  var accountSid = process.env.TWILIO_SID;
  var authToken = process.env.TWILIO_AUTH_TOKEN; 
 
  //require the Twilio module and create a REST client 
  var client = require('twilio')(accountSid, authToken); 
 
  client.messages.create({ 
    to: "+13525479441 ", 
    from: "+13526190024", 
    body: "Current Temp: " + weatherData.currently.temperature + "\xB0" + " \nOutside: " + weatherData.currently.summary + " \nRain Chance: " + weatherData.currently.precipProbability + "%",
  }, function(err, message) { 
    console.log(err);
    console.log(message.sid); 
  });
 
}); 
