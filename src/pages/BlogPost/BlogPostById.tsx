import { CircleChevronLeft, Send, Share } from "lucide-react";
import { useLocation } from "react-router-dom"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from "@/components/ui/button";

const BlogPostById = () => {

    const { state } = useLocation();


    return (
        <section className="max-w-7xl mx-auto flex flex-wrap">
            <aside className="flex-1 max-w-fit p-3">
                <Button variant={'default'} className="flex gap-3 flex-1 my-2 w-full bg-[#333]">
                    <CircleChevronLeft size={20} className="text-white cursor-pointer" />
                    Navigate back
                </Button>
                <Button variant={'default'} className="flex gap-3 flex-1 my-2 w-full bg-[#333]">
                    <Share size={20} className="text-white cursor-pointer" />
                    Share this post
                </Button>
                <Button variant={'default'} className="flex gap-3 flex-1 my-2 w-full bg-[#333]">
                    <Send size={20} className="text-white cursor-pointer" />
                    Send to email
                </Button>
            </aside>


            <aside className="flex-1 p-4 basis-[600px]">
                <div className="border-l-4 py-4 border-[#333] pl-4 bg-slate-50">
                    <h1 className="first-letter:uppercase text-3xl mb-2">{state.element.title}</h1>
                    <p className="first-letter:uppercase">{state.element.subtitle}</p>
                </div>

                <hr className="color-gray-500 mt-10" />
                <p className="color-gray-500 mt-4 text-sm text-gray-500">The blog contains {state.element.images.length} images</p>



                <aside className="prose mt-10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{state.element.content}</ReactMarkdown>
                </aside>
            </aside>


        </section>
    )
}

export default BlogPostById
