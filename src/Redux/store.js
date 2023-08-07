import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from 'redux-thunk'

const middleware = [thunk]

const rootReducer = combineReducers({
   
      reducer

})


export const store = legacy_createStore(rootReducer , applyMiddleware(...middleware) )








// export const store = legacy_createStore(Reducer)










