const shelfReducer = (state = ['dog'], action) => {
    switch (action.type) {
      case 'SET_ITEM':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default shelfReducer;
  