const initialState = {
    value: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COUNTER':
        return { ...state, value: action.payload };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  