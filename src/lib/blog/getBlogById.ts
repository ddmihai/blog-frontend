import { axiosInstance } from "@/axios/axiosInstance";


export const getSingleBlogById = async (id: string) => {
    let { data } = await axiosInstance.post('/getSingleBlog', { blogId: id });
    return await data;
}