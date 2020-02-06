// 3. Adım -> Herhangi bir event'in gerçekleştiğinde
// o eyleme göre yönlendirme işlemi burada yapılır
// Ayrıca metodlara gönderilecek state'ler
// buradan transfer edilir.

import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function changeCategoryReducer(state=initialState.currentCategory,action){
switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
       return action.payload

    default:
        return state;
}
}