export const buyCake = (quantity) => {
    return{
        type: 'Buy_Cake',
        payload: quantity,
    }
}

export const buyIcecream = (quantity) => {
    return{
        type: 'Buy_Icecream',
        payload: quantity,
    }
}

export const buyChocolate = (quantity) => {
    return{
        type: 'Buy_Chocolate',
        payload: quantity,
    }
}