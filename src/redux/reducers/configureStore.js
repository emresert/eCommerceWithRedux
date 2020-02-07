

// reducerler için store createStore metodu ile oluşturuldu.
// istek ile cevap arasında ki katman olan middleware import
// edildi
import { createStore, applyMiddleware } from "redux"

import rootReducer from "./index"

// redux'tan asenkron işlemler için thunk import edildi
import thunk from "redux-thunk"


// eğer store asenkron işlemler içeriyorsa
// middleware uygulanmalıdır
export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk))
}