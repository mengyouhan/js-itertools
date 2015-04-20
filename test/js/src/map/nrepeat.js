
var one;

one = function ( item, times, expected ) {


	deepEqual(
		itertools.list( itertools.nrepeat( item , times ) ),
		expected,
		JSON.stringify( [item, times] )
	);

};



test( "nrepeat", function () {

	[0, 1, -1, [], "A", "ABC", ["A"], [0, 1, -1], ["A", "B", "C"]]
	.forEach( function ( item ) {
		one( item, 0, [] );
		one( item, 1, [item] );
		one( item, 2, [item,item] );
		one( item, 3, [item,item,item] );
	});



});

