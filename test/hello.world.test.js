var learning = require( '../' ),
	chai = require( 'chai' ),
	expect = chai.expect,
	sinon = require( 'sinon' );

describe( "e-learning", function() {

	describe( "abc", function() {



		it( 'should return zxy', function() {

			expect( learning.abc() ).to.be.equal( "zxy" );

		});

	});

	describe( "hello", function() {

		it( 'should return world', function() {

			expect( learning.hello() ).to.be.equal( "world" );

		});

	});

	describe( "foo", function() {

		it( 'should return bar', function() {

			expect( learning.foo() ).to.be.equal( "bar" );

		});

	});

	describe( "bar", function() {

		it( 'should return whiskey', function() {

			expect( learning.bar() ).to.be.equal( "whiskey" );

		});

	});

	describe( "sum", function() {

		it( 'should return 5 on 2 + 3', function() {

			expect( learning.sum( 2, 3 ) ).to.be.equal( 5 );

		});

	});
	
});


