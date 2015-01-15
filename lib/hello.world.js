var learning = module.exports = {},
	Util = require( 'findhit-util' );

learning.abc = function () {

	return 'zxy';

};

learning.hello = function () {

	return 'world';
	
};

learning.foo = function () {

	return 'bar';
	
};

learning.bar = function () {

	return 'whiskey';
	
};

learning.sum = function () {
	var t = 0;

	Util.each( arguments, function ( v ) {
		t += v;
	});

	return t;
	
};