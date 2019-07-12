import React, { Component } from 'react';
import {createStore,bindActionCreators} from 'redux';
import { connect,Provider } from 'react-redux';


const initState = { count:0 };
// reducer
const counter = (state = initState,action) =>{
    switch (action.type) {
        case "PLUS_ONE":
            return{count: state.count+1};
        case "MINUS_ONE":
                return{count: state.count-1};
        case "CUSTOM_COUNT":
                return { counter: state.count+ action.payload.count };
        default:
            break;
    }
    return state
}

function plusOne(){
    return{
        type:'PLUS_ONE'
    }
}

function minusOne(){
    return{
        type:'MINUS_ONE'
    }
}

// create store 参数为reducer
const store = createStore(counter)


export  class Counter extends Component {
    render() {
        const {count,plusOne,minusOne} = this.props
        return (
            <div>
                <button onClick={minusOne}>-</button>
                    {count}
                <button onClick={plusOne}>+</button>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        plusOne,
        minusOne
    },dispatch)
}

const ConnectdCounter = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default class CounterSample extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ConnectdCounter />
            </Provider>
        )
    }
}

