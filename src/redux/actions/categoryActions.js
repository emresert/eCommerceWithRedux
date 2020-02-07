// Action import edildi.
import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}

// gelen action type ve gönderilecek parametre 
// reducer için tanımlandı
// action reducer'ın anlayacağı tipe dönüşltürüldü
export function getCategoriesSuccess(categories) {
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}

// aksiyon methodumuz tanımlandı
// dispatch ile getCategoriesSuccess metodu çağıralarak
// reducer'ın anlayacağı yapıya geçilir
export function getCategories() {
    return function (dispatch) {
        let url = "http://localhost:3000/categories";
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))
    };
}