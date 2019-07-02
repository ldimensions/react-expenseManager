import * as actionTypes from './actionTypes';
import axios from 'axios';
//import axios from '../../axios';
axios.defaults.baseURL = 'http://localhost:8080/api';


export const addCategorySuccess = (category) => {
    return {
        type: actionTypes.ADD_CATEGORY,
        payload: category
    }
}

export const categoryFailed = (error) => {
    return {
        type: actionTypes.ERROR,
        payload: error
    }
}

export const getCategorySuccess = (category) => {
    return {
        type: actionTypes.CATEGORY_LIST,
        payload: category
    }
}

export const getCatgorySuccess = (category) => {
    return {
        type: actionTypes.GET_CATEGORY,
        payload: category
    }
}
// export const addCategory = (category, history) => {

//     return dispatch => {
//         // Add loading button
//         axios.post('/addCategory', category)
//             .then ( response => {
//                 console.log(response);
//                 dispatch (addCategorySuccess(category));                
//             })
//             .catch( error => {
//                 dispatch (addCategorySuccess(category));
//                 //dispatch (addCategorySuccess(error.response.data));
//             })
//     }
// }

export const addCategory = (category, history) => async dispatch => {
    try {
        await axios.post('/category', category);
        history.push('/category');
        dispatch (addCategorySuccess(category));
    } catch (error) {
        history.push('/category');
        //category.id = Math.floor(Math.random() * 1001);
        //dispatch (addCategorySuccess(category));
        dispatch (categoryFailed(error.response.data));
    }
}

export const getCategories = ( history ) => async dispatch => {
    try {
        const res = await axios.get('/getAllCategory');
        dispatch (getCategorySuccess(res.data));
    } catch ( err ) {
        //dispatch (getCategorySuccess());
        dispatch (categoryFailed(err.data));
    }
}

export const getCategory = (id, history) => async dispatch => {
    try{
        const res = await axios.get('/getCategory/'+id);
        dispatch(getCatgorySuccess(res.data));
    }catch (err) {
        dispatch (categoryFailed(err.data));
    }
}
