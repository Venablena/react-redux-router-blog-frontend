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
