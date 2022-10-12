const initialState = {
    numOfIcecream: 200,
  };

export const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Buy_Icecream":
        if(action.payload > state.numOfIcecream)
        {
            alert("Those number of ice creams are not in stock!!!");
            return state;
        } 
        return { ...state, numOfIcecream: state.numOfIcecream - action.payload };
      default: return state;
    }
};