import {
  ADD_PFEP_BASIC_DATA,
  ADD_PFEP_DATA,
  CLEAN_PFEP_DATA,
  FETCH_PRODUCTS,
} from '../actions/index';

const initialState = {
  products: [],
  pfepData:{}
};

export const fetchData = (state = initialState, action) => {
  console.log(state,action,'ye')
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ADD_PFEP_DATA:{
      return{
        ...state,
        pfepData:{ ...state.pfepData,...action.data, }
      }
    }
    case ADD_PFEP_BASIC_DATA:{
      return{
        ...state,
        pfepData:action.data
      }
    }
    case CLEAN_PFEP_DATA:{
      return{
        ...state,
        pfepData:{}
      }
    }
    default:
      return state;
  }
};
