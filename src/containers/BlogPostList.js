import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import BlogPostAbbreviated from '../containers/BlogPostAbbreviated'
import { fetchBlogPosts } from '../actions'

class BlogPostList extends Component{
  componentDidMount(){
    this.props.fetchBlogPosts()
  }

  render(){
    return (
      <div className='container'>
        <div className='row' style={{marginBottom: '32px'}}>
          <div className='col-md-12'>
            <div className='float-right'>
              <div className='btn btn-secondary'>
                <Link to='/blogpost/new'>Create New</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='list-group'>
            {
              _.map(this.props.blogPosts, (blogPost) => (
                <BlogPostAbbreviated {...blogPost} key={blogPost.id}/>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {blogPosts: state.blogPosts}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchBlogPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostList)
