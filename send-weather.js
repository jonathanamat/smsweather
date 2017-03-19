	var request = require('request');

request({
  url: 'https://api.darksky.net/forecast/ab610bc083b2e6ffb15905373c648898/29.1872,-82.1401',
  method: 'GET'
}, function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  var weatherData = JSON.parse(body);
  console.log('Temperature:', weatherData.currently.temperature, 'Currently:', weatherData.currently.summary); 

  var accountSid = 'AC0534d92fb3e99e3b58430a6310b0539a'; 
  var authToken = 'ef9775f3426922e5861a8c704ce2afb1'; 
 
  //require the Twilio module and create a REST client 
  var client = require('twilio')(accountSid, authToken); 
 
  client.messages.create({ 
    to: "+13525479441", 
    from: "+13526190024", 
    body: "Current Temperature: " + weatherData.currently.temperature + "\xB0" + " \nCurrently: " + weatherData.currently.summary,
  }, function(err, message) { 
    console.log(err);
    console.log(message.sid); 
  });
 


}); 



