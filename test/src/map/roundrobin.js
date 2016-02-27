import { test } from 'ava' ;

	import { list , roundrobin } from '../../..' ;
test( "roundrobin", t => {

	const x = function ( iterables, expected ) {
		t.same( list( roundrobin( iterables ) ), expected );
	};

	x( [ 'ABC', 'D', 'EF' ] , ['A' ,'D', 'E', 'B' ,'F', 'C' ] ) ;

});
