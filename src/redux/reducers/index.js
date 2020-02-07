
    // Reducer'leri birleştirme işlemi
    // store oluşturmak için bütün reducer'ler
    // birleştirilerek root olarak export edilir
    import { combineReducers } from "redux"
    import changeCategoryReducer from "./changeCategoryReducer"
    import categoryListReducer from "./categoryListReducer"


     // store configure edileriken import edilecek reducerların 
     // birleştirildiği değişken
    const rootReducer = combineReducers({
        changeCategoryReducer, categoryListReducer
    })

   
    export default rootReducer;