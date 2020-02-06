// 5. Adım -> Bir store oluşturarak
// bütün componentlerin buradan state'lere
// veya actionlara erişimi sağlanır.
import {createStore} from "redux"
import rootReducer from "./index"


export default function configureStore(){
    return createStore(rootReducer)
}