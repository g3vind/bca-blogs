import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('https://bcablogsdata.onrender.com/blogs')


    return (
        <div className="home">
            <h2>All Blogs</h2>
            {error && <div id='err'>{error} <img id='error-image' src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_640.png" alt="" srcset="" /> </div>}

            {isPending && <div className="blog-list-shimmer">
                <div className="loading-center">
                    Loading...
                    <div class="loader"></div>
                </div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>

            </div>
            }
            {blogs && <BlogList blogs={blogs} />}
        </div>
    )
}

export default Home;