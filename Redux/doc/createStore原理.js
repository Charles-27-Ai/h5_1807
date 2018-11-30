function createStore(reducer){
	let state = reducer();

	let listeners = [];

	let getState = function(){
		
		return state;
	}
	let dispatch = function(action){
		state = reducer(state,action);

		//执行fn
		listeners.forEach(fn=>{
			fn();
		})
	}
	let subscribe = function(fn){
		listeners.push(fn)
	}

	return {
		getState,
		dispatch,
		subscribe
	}
}

let store = createStore((state,action){})
store.getState();
store.subscribe(function(){
	console.log(666)
})
store.subscribe(function(){
	console.log(777)
})
store.dispatch({type:'ADD_TO_CART',payload:{name:'xxx'}})