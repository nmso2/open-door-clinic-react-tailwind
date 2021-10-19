import React from 'react';
import BlogItem from '../BlogItem/BlogItem';

const Blog = () => {
    return (
        <div className="container mb-12 mx-auto p-20 px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <BlogItem></BlogItem>
            </div>
        </div>
    );
};

export default Blog;