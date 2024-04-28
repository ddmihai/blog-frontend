import { ChangeEvent, useEffect, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllCategories } from "@/lib/categories/getAllCategories"
import AllCategories from "../Profile/components/AllCategories"
import { axiosInstance } from "@/axios/axiosInstance"
import ModalWithAddedImages from "./components/ModalWithAddedImages"
import { getSingleBlogById } from "@/lib/blog/getBlogById"
import { useLocation, useNavigate } from "react-router-dom";





const CreateBlogPage = () => {

    const navigate = useNavigate();
    const { state } = useLocation();



    // React markdown state
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubTitle] = useState<string>('');

    // Handle change state
    const handleSetTitle = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const handleChangeSubtitle = (event: ChangeEvent<HTMLInputElement>) => setSubTitle(event.target.value);
    const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);






    /**
     *      USEEFFECT
    */

    const [categories, setCategories] = useState<TCategory[]>();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
    const [blogJustCreated, setBlogJustCreated] = useState<TBlogJustCreated | null>();

    useEffect(() => {
        getAllCategories().then(data => setCategories(data));

        let blogDataAfterRefresh = window.localStorage.getItem('blogData');
        blogDataAfterRefresh && setBlogJustCreated(JSON.parse(blogDataAfterRefresh));
    }, []);




    /**
     * 
     *      CREATE A BLOG - if the blog is not created, the user cannot add markdown. 
     *      1. Add a title, subtitle and category associated to continue writing the blog
     *      2. Save in localstorage the created blog, to prevent the data loss when loading the page
     */
    let payloadBlog = {
        category: selectedCategory,
        title, subtitle
    }

    const handleCreateBlog = async () => {
        try {
            let data = await axiosInstance.post('/createBlog', payloadBlog);
            if (data.status === 201) {
                alert('Blog created and assiciated with category. Please do not refresh tha page');
                setBlogJustCreated(data.data.newBlog);
                window.localStorage.setItem('blogData', JSON.stringify(data.data.newBlog));
            }
        }
        catch (error) {
            console.log(error);
        }
    }





    /**
     *      IMAGE PROCESSING
    */
    const [file, setFile] = useState<File | null>(null);
    const [imagesForThisBlog, setImagesForThisBlog] = useState<string[] | []>();


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };


    const handleUpload = async () => {
        if (file && blogJustCreated) {

            const formData = new FormData();
            formData.append("image", file);
            formData.append('blogId', blogJustCreated?._id);


            try {
                const data = await axiosInstance.post('/addBlogImage', formData);
                if (data.status === 201) {
                    setImagesForThisBlog(data.data.images)
                    setFile(null);
                    console.log(blogJustCreated?._id)
                }
            } catch (error) {
                console.error(error);
                setFile(null)
            }
        }
    };


    /**
     *      
     */
    const handleCompleteBlog = async () => {
        if (blogJustCreated) {
            let data = await axiosInstance.put('/completeBlog', { blogId: blogJustCreated._id, content });
            if (data.status === 200) {
                navigate('/profile');
                window.localStorage.clear();
            }
        }
    }




    // Get single blog data
    const [singleBlog, setSingleBlog] = useState();

    useEffect(() => {
        if (blogJustCreated) {
            getSingleBlogById(blogJustCreated?._id).then((data) => {
                setSingleBlog(data)
            })
        }
    }, [imagesForThisBlog]);




    const handleAddEditBlogHeader = () => {
        let createdBlog = {
            _id: state.element._id,
            title: title ? title : state.element.title,
            subtitle: subtitle ? subtitle : state.element.subtitle
        };

        window.localStorage.setItem('blogData', JSON.stringify(createdBlog));

        setBlogJustCreated(createdBlog as TBlogs);
    }

    const handleEditBlog = async () => {
        try {
            if (state.editMode && state.element) {
                const blogId = state.element; // Assuming `state.element` is the blog post ID
                await axiosInstance.put('/editblog', {
                    _id: blogId,
                    content
                });

                // Optionally, navigate back to the profile or a success page
                navigate('/profile');
            } else {
                console.error('Edit mode is not enabled or blog ID is not available.');
            }
        } catch (error) {
            // Show an error message to the user instead of just logging it
            alert('Failed to edit the blog. Please try again.');
            console.error(error);
        }
    };


    useEffect(() => {
        if (state?.editMode) {
            window.localStorage.clear();
        }
    }, [window.location]);




    return (
        <main className="mx-auto max-w-7xl lg:flex ">

            <aside className="flex-1 max-w-xs p-4">
                {/* Chosen pictures list / remove or visualise */}
                <h2 className="p-2 text-xl text-[#333] font-bold mt-3">Available pictures</h2>
                <ModalWithAddedImages
                    imagesList={state?.element ? state.element : singleBlog}
                />
            </aside>


            {/* RIGHT SIDE WHERE THE BLOG IS CReATING */}
            <aside className="flex-1">
                <h2 className="text-2xl text-[#333] font-bold border-l-4 px-4 py-4 bg-slate-50">Create new blog</h2>

                {/* Add blog details here to start section */}
                {!blogJustCreated && <div className="flex flex-col max-w-sm px-2">
                    <p className="my-3 text-gray-600 text-sm">Please create a title, subtitle and select a category before starting to write your blog</p>
                    <input
                        placeholder="Blog title"
                        className="border rounded-lg py-2 px-4 flex-1 "
                        onChange={handleSetTitle}
                    />

                    <input
                        placeholder="Blog subtitle"
                        className="border rounded-lg py-2 px-4 flex-1 my-3"
                        onChange={handleChangeSubtitle}
                    />

                    {!state?.editMode && <AllCategories
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}
                    />}

                    <Button
                        className="my-4 max-w-fit"
                        onClick={state?.editMode ? handleAddEditBlogHeader : handleCreateBlog}
                        variant={'default'}>{state?.editMode ? 'Edit title and subtitle' : 'Create blog'}</Button>

                </div>}



                {/* Section will be displayed only if the user creates a blog or after the blog is fetched from localstorage */}
                {blogJustCreated &&
                    <section>
                        <div className="flex w-full max-w-sm items-center gap-1.5 my-3 p-2">
                            <Input onChange={handleFileChange} id="picture" type="file" />
                            <Button onClick={handleUpload} variant={'default'}>Add image</Button>
                        </div>


                        <div className="m-2 mt-3 ">
                            <Textarea
                                placeholder="Markdown...."
                                onChange={handleContent}
                                value={content}
                            />
                            {!state?.editMode && <Button
                                className="mt-3"
                                onClick={handleCompleteBlog}
                                variant={'default'}>Create blog</Button>}

                            {state?.editMode && <Button
                                className="mt-3"
                                onClick={handleEditBlog}
                                variant={'default'}>Edit blog</Button>}
                        </div>

                    </section>
                }







                {/* Preview section */}
                {(content && blogJustCreated) && (
                    <div className="m-2 mt-6">
                        <h2 className="text-2xl text-[#333] font-bold border-l-4 px-4 py-4 bg-slate-50">Preview</h2>
                        <div className="prose">

                            <div className="my-4">
                                <h2 className="m-0">{blogJustCreated.title}</h2>
                                <p className="text-sm mt-2">{blogJustCreated.subtitle}</p>
                            </div>

                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </aside>
        </main>
    )
}

export default CreateBlogPage
