import { axiosInstance } from "@/axios/axiosInstance"


export const getAllCategories = async () => {
    let { data } = await axiosInstance.get('/categories');
    return await data;
}