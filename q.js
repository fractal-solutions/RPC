//SERVER

const jayson = require('jayson');

// create a server
const server = new jayson.Server({
  incrementInt: function(args, callback) {
    callback(null, args[0] + 1)
  },
  squareAndAdd: function(args,callback) {
    callback(null, args[0]**2 + args[1])
  },
  reverseString: function(args, callback) {
    callback(null,args[0].split('').reverse().join(''))
  }
});

server.http().listen(3000);