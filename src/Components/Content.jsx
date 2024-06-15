import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg"
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blog = useLoaderData();
    const {cover_image,title,tags,body_html,url} = blog;
    return (
        <div className="mx-auto group hover:no-underline focus:no-underline  border-2 border-opacity-30">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImage} />
				<div>
                    <div className="flex flex-wrap pt-6 gap-2 border-t border-dashed border-gray-400">
                    {
                            tags.map(tag=>(
                                <a key={tag}
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-1 rounded-sm hover:underline  text-black"
                            >
                            #{tag}
                            </a>
                            ))
                    } 
                    </div>
                </div>
                <div className="p-1 space-y-2 overflow-hidden">
					<a target="_blank" href={url} className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
					<Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
				</div>
		</div>
    );
};

export default Content;