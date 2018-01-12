import { combineReducers } from 'redux'
import blogPostReducer from './reducer_blog_post'

export default combineReducers({
  blogPosts: blogPostReducer
})
