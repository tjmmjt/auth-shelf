

const spellsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SPELLS':
        return action.payload;
      default:
        return state;
    }
  };



  
  // user will be on the redux state at:
  // state.shelf
  export default spellsReducer;
  