import toast from "react-hot-toast";

export const getBlogs = ()=>{
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}

export const savedBlogs = (blog)=>{
    const storedBlogs = getBlogs();
    const isExist = storedBlogs.find(b=> b.id === blog.id);
    if(isExist){
        return toast.error('Already bookmarked!')
    }
    storedBlogs.push(blog);
    localStorage.setItem('blogs',JSON.stringify(storedBlogs))
    toast.success('Blog Bookmarked Successfully')
}

export const deleteBlogs = (id) =>{
    
    let storedBlogs = getBlogs();
    const remaining = storedBlogs.filter(blog=> blog.id !== id);
    localStorage.setItem('blogs',JSON.stringify(remaining));
    toast.success('Blog removed from Bookmark');
    
}