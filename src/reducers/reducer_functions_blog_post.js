import _ from 'lodash'

import {  FETCH_BLOG_POSTS_SUCCESS,
          FETCH_BLOG_POST_SUCCESS,
          CREATE_BLOG_POST_SUCESS,
          DELETE_BLOG_POST_SUCCESS } from '../actions'

const fetchBlogPostsSuccess = (state, action) =>
  _.mapKeys(action.payload, 'id')

const fetchBlogPostSuccess = (state, action) => {
  const { id } = action.payload
  return {...state, [id]: action.payload}
}

const createBlogPostSucess = (state, action) => {
  const { id } = action.payload
  return {...state, [id]: action.payload}
}

const deleteBlogPostSuccess = (state, action) => {
  const { id } = action.payload
  return _.omit(state, id)
}

export default {
  [FETCH_BLOG_POSTS_SUCCESS]: fetchBlogPostsSuccess,
  [FETCH_BLOG_POST_SUCCESS]: fetchBlogPostSuccess,
  [CREATE_BLOG_POST_SUCESS]: createBlogPostSucess,
  [DELETE_BLOG_POST_SUCCESS]: deleteBlogPostSuccess
}
