import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { themeReducer } from '../../h12/bll/themeReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
