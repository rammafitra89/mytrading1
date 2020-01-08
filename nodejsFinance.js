var tulind = require('tulind');
console.log("Tulind Indicator Version");
console.log(tulind.version);


//Examples assume you have some price data like this:
//Data order is from oldest to newset (index 0 is the oldest)
var open  = [4,5,5,5,4,4,4,6,6,6];
var high  = [9,7,8,7,8,8,7,7,8,7];
var low   = [1,2,3,3,2,1,2,2,2,3];
var close = [4,5,6,6,6,5,5,5,6,4];
var volume = [123,232,212,232,111,232,212,321,232,321];


// Do a simple moving average on close prices with period of 3

tulind.indicators.sma.indicator([close],[3], function (err,results) {
	console.log("Result of sma is:");
	console.log(results[0]);
});

//Functions that take multiple inputs, options, or outputs use arrays.
//Call Stochastic Oscillator, taking 3 inputs, 3 options, and 2 outputs.

tulind.indicators.stoch.indicator([high, low, close], [5, 3, 3], function(err, results) {
  console.log("Result of stochastic oscillator is:");
  console.log(results[0]);
  console.log(results[1]);
});


//Discover argument types at run-time:
console.log(tulind.indicators.stoch);

//Produces:
{ name: 'stoch',
  full_name = 'Stochasitic Oscillator',
  type = 'indicator',
  inputs = 3,
  options = 3,
  outputs = 2,
  input_names = [ 'high', 'low', 'close' ],
  option_names = [ '%k period', '%k slowing period', '%d period' ],
  output_names = [ 'stoch_k', 'stoch_d' ],
  indicator = [Function],
  start = [Function] }

  console.log("Given these options, the output arrays will be this much shorter than the input arrays:");
  console.log(tulind.indicators.stoch.start([5,3,3]));
  