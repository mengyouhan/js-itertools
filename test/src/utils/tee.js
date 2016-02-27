import { test } from 'ava' ;


	import { list , map , tee } from '../../..' ;
test( "tee", function () {


	const x = ( iterable , n , expected ) => {
		t.same( list( map( list , tee( iterable , n ) ) ) , expected ) ;
	};

	x( [], 0, [] );
	x( [], 1, [[]] );
	x( [], 2, [[],[]] );
	x( [0], 0, [] );
	x( [0], 1, [[0]] );
	x( [0], 2, [[0],[0]] );
	x( [5, 7], 0, [] );
	x( [5, 7], 1, [[5, 7]] );
	x( [5, 7], 2, [[5, 7],[5, 7]] );

});
