//CLIENT

const jayson = require('jayson');

// create a client
const client = jayson.Client.http({
  port: 3000
});

// invoke "add"
client.request('incrementInt', [5], function(err, response) {
  if(err) throw err;
  console.log(response.result); // 6
});

client.request('squareAndAdd', [2.5, 5], function(err, response) {
    if(err) throw err;
    console.log(response.result); //
});

client.request('reverseString', ["GALLERY DEPT"], function(err, response) {
    if(err) throw err;
    console.log(response.result); // TPED YRELLAG
});