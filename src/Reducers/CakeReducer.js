const initialState = {
  numOfCakes: 10,
};
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Buy_Cake":
      if(action.payload > state.numOfCakes)
      {
        alert("Those number of cakes are not in stock!!!");
        return state;
      }  
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    default: return state;
  }
};
