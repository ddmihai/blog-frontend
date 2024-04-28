import { useEffect, useState } from "react"
import AllCategories from "../Profile/components/AllCategories";
import { getAllCategories } from "@/lib/categories/getAllCategories";
import { getBlogsByCategoryId } from "@/lib/blog/getBlogsByCategoryId";

import cardBG from '@/assets/card-bg.jpg';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



const BlogsPage = () => {


    // Categories
    const [categories, setCategories] = useState<TCategory[]>();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

    useEffect(() => { getAllCategories().then(data => setCategories(data)); }, []);



    // NAvigate to other page
    const [blogs, setBlogs] = useState<TBlogs[] | undefined>();

    useEffect(() => {
        selectedCategory && getBlogsByCategoryId(selectedCategory).then(data => setBlogs(data));
    }, [selectedCategory]);




    const navigate = useNavigate();


    return (
        <aside className="border-4 border-red-500 max-w-7xl mx-auto lg:flex">
            <aside className="border-4 border-blue-600 flex-1 max-w-sm p-4">
                <AllCategories
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                />
            </aside>

            {/* right side */}
            <aside className="border-4 border-green-600 flex-1">
                {
                    blogs?.map(element => (
                        <div key={element._id} className="max-w-xs relative rounded-xl overflow-hidden h-[250px] border m-3">
                            <img
                                className="object-cover object-center w-full h-full absolute top-0 left-0"
                                src={element.images[0] === '' ? cardBG : element.images[0]}
                                alt={element._id}
                            />

                            <div className="bg-black/50 z-40 absolute top-0 bottom-0 right-0 left-0 p-4 flex justify-between flex-col">
                                <h2 className="text-2xl text-white first-letter:uppercase">{element.title}</h2>
                                <div>
                                    <p className="text-white first-letter:uppercase mb-2">{element.subtitle}</p>
                                    <Button
                                        onClick={() => navigate('/individual-blog', {
                                            state: { element }
                                        })}
                                        variant={'outline'}
                                        className="bg-transparent text-white">Read</Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </aside>

        </aside>
    )
}

export default BlogsPage
