import { Link } from "react-router-dom";

import placeHolderImage from "../assets/404.jpg"
import { MdDeleteForever } from "react-icons/md";


const Blog = ({blog,deletable,handleDelete}) => {
    
    const {cover_image,title,description,published_at,id} = blog;
    
    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 hover:scale-105 hover:border-secondary border-opacity-30">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-800">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
		</Link>
            {deletable && <div onClick={()=>handleDelete(id)} className="absolute text-2xl bg-primary p-2 rounded-full text-secondary -top-4 -right-0 transition hover:scale-105 hover:cursor-pointer"><MdDeleteForever/></div>}
        </div>
    );
};

export default Blog;