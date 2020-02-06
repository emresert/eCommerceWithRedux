// 2. Adım -> Action type'lara ulaşmak için hepsi
// import edilmeli daha sonra
// action type göre operasyon metodlarının
// iskeleti burada tanımlanır.
// Ayrıca redux'un anlaycağı parametre ve action type
// burda data notasyonunda olarak gönderilir.

import * as actionTypes from "./actionTypes";

export function changeCategory(category){
    return {type : actionTypes.CHANGE_CATEGORY, payload: category}
}