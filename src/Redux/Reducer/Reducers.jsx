import React from 'react'
import {Action,increment,decrement} from '../Action/Action'

const Reducers = (state = {value : "hey this is msg from Amine !!",counter:0},action) => {
  switch(action.type){
    case Action:
        return {...state,value : "hey this is msg from Ahmed !!"};
    case increment:
        return {...state,counter :state.counter +1};
    case decrement:
        return {...state,counter :state.counter-1};
    default :
        return state;
        
  }
}

export default Reducers