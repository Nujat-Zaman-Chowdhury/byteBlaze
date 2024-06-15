import { useEffect, useState } from "react";
import Blog from "../Components/Blog";
import { deleteBlogs, getBlogs } from "../Utils/LocalStorage";
import EmptyState from "../Components/EmptyState";


const Bookmarks = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        const savedBlogs = getBlogs();
        setBlogs(savedBlogs);
    },[])
    const handleDelete = (id)=>{
        deleteBlogs(id);
        const savedBlogs = getBlogs();
        setBlogs(savedBlogs);
    }
    if(blogs.length<1) return <EmptyState message={'No bookmarks available'} address={'/blogs'} label={'Go to blogs'}></EmptyState>
    return (
        <div className="grid py-5 sm:py-3 lg:py-8  justify-center grid-cols-1 gap-4 sm:gap-3 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map(blog=><Blog blog={blog} key={blog.id} deletable={true} handleDelete={handleDelete}></Blog>)
            }
			
		</div>
    );
};

export default Bookmarks;