
// switch için type'lar import edildi
// parametre olarak state gönderildi
// gönderilen state initialState'den çekildi.
import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

// burada gönderilen state props olarak geçilecek 
// state değerini tutar
export default function categoryListReducer(state = initialState.categories, action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}