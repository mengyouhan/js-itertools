import { test } from 'ava' ;

	import { range , frame , zip , list } from '../../..' ;
test( "frame" , function ( ) {


	const A = frame( range( 100 ) , 2 ) ;
	const B = zip( [ range( 100 ) , range( 1 , 100 ) ] ) ;

	t.same( list( A ) , list( B ) , "compare to zip output" ) ;

	const C = frame( range( 4 ) , 3 ) ;

	t.same( list( C ) , [ [ 0 , 1 , 2 ] , [ 1 , 2 , 3 ] ] , "n !| N" ) ;

	const D = frame( range( 2 ) , 3 ) ;

	t.same( list( D ) , [ ] , "empty" ) ;

} ) ;

