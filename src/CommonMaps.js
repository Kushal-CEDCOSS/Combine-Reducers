import { buyCake, buyChocolate, buyIcecream } from "./Actions"

export const mapDispatchToProps = (dispatch) => {
    return{
        BuyingCake: (value) => dispatch(buyCake(value)),
        BuyingChocolate: (value) => dispatch(buyChocolate(value)),
        BuyingIcecream: (value) => dispatch(buyIcecream(value))
    }
}


export const mapStateToProps = (state) => {
    return {
        ...state,
    }
}