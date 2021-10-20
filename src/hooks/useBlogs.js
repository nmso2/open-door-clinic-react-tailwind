import { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return [blogs, setBlogs]
};

export default useBlogs;