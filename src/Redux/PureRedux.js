import React from 'react';
import {createStore, bindActionCreators , combineReducers } from 'redux';
// bindActionCreators combineReducers
function run () {

    const initState = { counter :0 }
    const counter = (state= initState, action) => {
    
        switch (action.type) {
            case 'PLUS_ONE':
                return { counter: state.counter+1 };
            case 'MINUS_ONE':
                return { counter: state.counter-1 };
            case "CUSTOM_COUNT":
                    return { counter: state.counter+ action.payload.count };
            default:
                break;
        }
        return state;
    }

    const todos = (state={}) => state;


    // create store
    // const store = createStore(counter)
    const store = createStore( combineReducers({
        counter,
        todos
    }))

    // action creator

    function plusOne(){
        return{type:'PLUS_ONE'}
    }

    function minusOne(){
        return{type:'MINUS_ONE'}
    }

    function custonCount(count){
        return{
            type:'CUSTOM_COUNT',
            payload:{count}
        }
    }

    plusOne = bindActionCreators(plusOne , store.dispatch)

    store.subscribe( () => console.log(store.getState()));
    // store.dispatch(plusOne());
    plusOne();
    store.dispatch(minusOne());
    store.dispatch(custonCount(5));


    
}

export default () =>(
    <div>
        <button onClick={run}>return</button>
    </div>
)
    




