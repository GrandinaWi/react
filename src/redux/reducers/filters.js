const initialFiltersState = {
    sortBy: 0,
    category: [],
};

const filters = (state = initialFiltersState, action) => {
    switch (action.type) { // Обратите внимание на action.type
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
            };
        case 'SET_CATEGORY_BY':
            return {
                ...state,
                category: action.payload,
            };
        default:
            return state;
    }
};

export default filters;