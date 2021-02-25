import * as types from '../types/data.types';

const initialState = {
  pages: [],
  page: 1
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOAD_DATA_SUCCESS:
      let page = action.payload;
      page.page = state.pages.length;
      console.log("PAGE: ", page);
      return {
        ...state,
        pages: [...state.pages, page]
      }
    default:
      return state;
  }
};

export default rootReducer;