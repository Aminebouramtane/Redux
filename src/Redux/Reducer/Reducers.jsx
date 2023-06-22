import React from 'react'
import {Action} from '../Action/Action'

const Reducers = (state = {value : "hey this is msg from Amine !!"},action) => {
  switch(action.type){
    case Action:
        return {...state,value : "hey this is msg from Ahmed !!"};
    default :
        return state;
        
  }
}

export default Reducers