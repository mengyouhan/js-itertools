
let dropwhile = function* ( predicate , iterable ) {

	let iterator = iter( iterable ) ;

	for ( let item of iterator ) {

		if ( predicate( item ) ) continue ;

		// equivalent to return chain( [ [ item ] , iterator ] ) ;

		yield item ;

		yield* iterator ;

		return ;

	}

} ;

exports.dropwhile = dropwhile ;
