import {legacy_createStore as createStore} from "redux"
import { reducer } from "./reducer"
// import logger from "redux-logger"
// import { applyMiddleware } from "redux"

export const myStore=createStore(reducer)
// export const myStore=createStore(reducer,applyMiddleware(logger))



myStore.subscribe(()=>{
    console.log(myStore.getState())
})