// 4. Adım -> Bütün reducer'lar bir araya getirilir

import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"


const rootReducer = combineReducers({
    changeCategoryReducer
})

export default rootReducer;