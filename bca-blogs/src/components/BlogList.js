import React from 'react'
import { Link } from 'react-router-dom'
const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>  <h2>{`Title : ${blog.title}`}</h2>

                        <b><p>Written By : {blog.author}</p></b>
                    </Link>

                </div>
            ))
            }
        </div >
    )
}

export default BlogList;