import { combineReducers } from 'redux'
import blogPostReducerFunctions from './reducer_functions_blog_post'

const createReducer = (reducerFunctions, initialState) =>
  (state = initialState, action) =>
  reducerFunctions.hasOwnProperty(action.type) ?
    reducerFunctions[action.type](state, action) :
    state


export default combineReducers({
  blogPosts: createReducer(blogPostReducerFunctions, {})
})
