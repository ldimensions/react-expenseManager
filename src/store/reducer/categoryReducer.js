import * as actionTypes from '../actions/actionTypes';

const initialState = { 
    category: []
}

const addCat = ( state, action ) => {
    return {
        ...state
        //categories: state.categories.concat(action.payload)
    }
}

const getCat = ( state, action ) => {
    return {
        ...state,
        category: action.payload
    }
}

const getCatList = ( state, action ) => {
    return {
        ...state,
        list: action.payload
    }
}

const category = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_CATEGORY: return addCat ( state, action );
        case actionTypes.GET_CATEGORY: return getCat ( state, action );
        case actionTypes.CATEGORY_LIST: return getCatList ( state, action);
        default: return state;
    }
}

export default category;