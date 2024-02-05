import { combineReducers } from 'redux';

const equipmentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EQUIPMENT':
        return action.payload;
      default:
        return state;
    }
  };

  export default combineReducers ({
    equipmentReducer

  })