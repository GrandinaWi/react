const initalState={
    price:0,
    count:0,
}
const count = (state = initalState, action) => {
    switch (action.type) { // Обратите внимание на action.type
        case 'SET_PRICE':
            return {
                ...state,
                price: action.payload,
            };
        case 'SET_COUNT':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
};

export default count;