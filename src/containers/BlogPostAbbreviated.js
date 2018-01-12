import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function truncateAndSeparateContent(content){
  return `${content.slice(0, 300)}...`.split('\n')
}


function BlogPostAbbrebiated(props){
  const { id, title, created_at, content } = props
  return (
    <div>
      <div className='list-group-item flex-column align-items-start'>
        <div className="d-flex w-100 justify-content-between" style={{marginBottom: '10px'}}>
          <h5 className="mb-1">{title}</h5>
          <small>{moment(created_at).format("MMM Do YY")}</small>
        </div>
        <div className="mb-1">
          { truncateAndSeparateContent(content).map((e,i) => (
              <p key={i}>{e}</p>
            ))
          }
        </div>
        <p><Link to={`/blogPost/${id}`}>Continue Reading -></Link></p>
      </div>
    </div>
  )
}

export default BlogPostAbbrebiated
