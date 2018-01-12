export const FETCH_BLOG_POSTS_SUCCESS = 'FETCH_BLOG_POSTS_START'
export const FETCH_BLOG_POST_SUCCESS = 'FETCH_BLOG_POSTS_SUCCESS'
export const CREATE_BLOG_POST_SUCESS = 'CREATE_BLOG_POST_SUCESS'
export const DELETE_BLOG_POST_SUCCESS = 'DELETE_BLOG_POST_SUCCESS'


export function fetchBlogPosts(){
  return async (dispatch) => {
    const res = await request('/api/blogposts')
    const json = await res.json()

    dispatch({
      type: FETCH_BLOG_POSTS_SUCCESS,
      payload: json.blog_posts
    })
  }
}

export function fetchBlogPost(id){
  return async (dispatch) => {
    const res = await request(`/api/blogposts/${id}`)
    const json = await res.json()

    console.log(json)

    dispatch({
      type: FETCH_BLOG_POST_SUCCESS,
      payload: json.BlogPost
    })
  }
}

export function createBlogPost(blogPost, cb){
  return async (dispatch) => {
    const res = await request(`/api/blogposts`, 'POST', blogPost)
    const json = await res.json()

    dispatch({
      type: CREATE_BLOG_POST_SUCESS,
      payload: json.BlogPost
    })

    cb()
  }
}

export function deleteBlogPost(blogPostId, cb){
  return async (dispatch) => {
    const res = await request(`/api/blogposts/${blogPostId}`,'DELETE')
    const json = await res.json()

    dispatch({
      type: DELETE_BLOG_POST_SUCCESS,
      payload: json.BlogPost
    })

    cb()
  }
}

// ----------------------------------------------------------------------

async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
