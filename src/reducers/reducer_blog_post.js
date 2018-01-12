import _ from 'lodash'

import {  FETCH_BLOG_POSTS_SUCCESS,
          FETCH_BLOG_POST_SUCCESS,
          CREATE_BLOG_POST_SUCESS,
          DELETE_BLOG_POST_SUCCESS
        } from '../actions'

const INITIAL_VALUE = {}

const reducerFor = {
  [FETCH_BLOG_POSTS_SUCCESS]: fetchBlogPostsSuccess,
  [FETCH_BLOG_POST_SUCCESS]: fetchBlogPostSuccess,
  [CREATE_BLOG_POST_SUCESS]: createBlogPostSucess,
  [DELETE_BLOG_POST_SUCCESS]: deleteBlogPostSuccess

}

function fetchBlogPostsSuccess(state, action){
  return _.mapKeys(action.payload, 'id')
}

function fetchBlogPostSuccess(state, action){
  const { id } = action.payload
  return {...state, [id]: action.payload}
}

function createBlogPostSucess(state, action){
  const { id } = action.payload
  return {...state, [id]: action.payload}
}

function deleteBlogPostSuccess(state, action){
  const { id } = action.payload
  return _.omit(state, id)
}

export default function(state = INITIAL_VALUE, action){
  if(reducerFor.hasOwnProperty(action.type)){
    return reducerFor[action.type](state, action)
  }
  else{
    return state
  }
}
