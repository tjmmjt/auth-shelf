

const usernameReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERNAMES':
      return action.payload;
    default:
      return state;
  }
};
  
  // user will be on the redux state at:
  // state.shelf
  export default usernameReducer;
  