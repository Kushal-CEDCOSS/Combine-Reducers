const initialState = {
    numOfChocolates: 50,
};

export const chocolateReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Buy_Chocolate":
        if(action.payload > state.numOfChocolates)
        {
            alert("Those number of chocolates are not in stock!!!");
            return state; 
        } 
        return { ...state, numOfChocolates: state.numOfChocolates - action.payload };
      default: return state;
    }
};