import { axiosInstance } from "@/axios/axiosInstance";


export const getUserData = async () => {
    try {
        const data = await axiosInstance.get('/userData');
        if (data.status === 200) {
            window.sessionStorage.setItem('userData', JSON.stringify(data.data));
            return data.data;
        }
    }
    catch (error) {
        console.log(error)
        return error;
    }
}