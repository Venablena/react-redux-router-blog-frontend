import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { fetchBlogPost, deleteBlogPost } from '../actions'

class BlogPost extends Component{
  componentDidMount(){
    this.props.fetchBlogPost(this.props.match.params.id)
  }

  static separateContent(content){
    return content.split('\n')
  }

  deleteBlogPost(blogPostId){
    this.props.deleteBlogPost(blogPostId, ()=>{
      this.props.history.push('/')
    })
  }

  render(){
    const { blogPost } = this.props

    if(!blogPost) return <div>Loading...</div>

    return (
      <div className='container'>
        <div className='row' style={{marginBottom: '32px'}}>
          <div className='col-md-12'>
            <div className='d-flex w-100 justify-content-between'>
              <Link to='/'>Front page</Link>
              <div
                className='btn btn-danger'
                onClick={() => this.deleteBlogPost(blogPost.id)}>
                Delete Post
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='list-group'>
              <div className='list-group-item flex-column align-items-start'>
                <div className="d-flex w-100 justify-content-between" style={{marginBottom: '10px'}}>
                  <h5 className="mb-1">{blogPost.title}</h5>
                  <small>{moment(blogPost.created_at).format("MMM Do YY")}</small>
                </div>
                <div className="mb-1">
                  {
                    BlogPost.separateContent(blogPost.content).map((e,i) => (
                      <p key={i}>{e}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return { blogPost: state.blogPosts[ownProps.match.params.id] }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchBlogPost, deleteBlogPost}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
