
import { combineReducers } from 'redux'
import { bikesReducer } from './bikesReducer'

export const mainReducer = combineReducers({
	bikes: bikesReducer
})
