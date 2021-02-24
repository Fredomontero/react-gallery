import * as types from '../types/data.types';

const initialState = {
  images: []
};

export default function dataReducer(state = initialState, action){
  switch(action.type){
    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        images: action.payload
      }
    default:
      return state;
  }
};