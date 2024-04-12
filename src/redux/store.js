import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";

//reducerları birleştir.

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));  //store oluşturuldu, export edildi.
//applyMiddleware bir arayazılımı redux a dahil etmeye yarar
// thunk arayazılımını reduxa dahil ettik