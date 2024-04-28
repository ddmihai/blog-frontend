import { axiosInstance } from "@/axios/axiosInstance";

export const getBlogsByCategoryId = async (categoryId: string) => {
    const { data } = await axiosInstance.post('/getBlogsByCategoryId', { categoryId })
    return await data;
}