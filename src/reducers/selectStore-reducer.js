import {ADD_STORE} from "../actions/actions";

export default function (state = [], action){
    switch(action.type){
        case ADD_STORE :
            return [...state, action.payload];
        default :
            return state;
    }
}