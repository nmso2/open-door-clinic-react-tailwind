import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import BlogItem from '../BlogItem/BlogItem';

const Blog = () => {
    const [blogs] = useBlogs();
    return (
        <div className="container mb-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    blogs.map(blog => <BlogItem key={blog.id} blog={blog}></BlogItem>)
                }
            </div>
        </div>
    );
};

export default Blog;