const initialPizzasState = {
    items: []
};

const pizzas = (state = initialPizzasState, action) => {
    switch (action.type) { // Обратите внимание на action.type
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};
export default pizzas;