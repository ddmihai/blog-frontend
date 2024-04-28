import { axiosInstance } from "@/axios/axiosInstance";
import { Button } from "@/components/ui/button";
import { TLogin } from "@/types/login";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    /**
     *      Navigation and HOOK for form
     */
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<TLogin>();




    /**
     *      Loading state 
     *      Style for input
     *      User state
     */
    const inputstate = 'border rounded-lg py-3 px-4 flex-1';
    const [loading, setLoading] = useState(false);



    /**
     *      Handle submit form
    */
    const handleRegistration = async (data: TLogin) => {
        try {
            setLoading(true);
            let userResponse = await axiosInstance.post('/login', data);

            if (userResponse.status === 200) {
                setLoading(false);
                alert('Welcome back');
                navigate('/profile');
            }
        }

        catch (error) {

            if (error instanceof AxiosError) {
                setLoading(false);

                error.response?.status === 404 && alert(error.response?.data.message);
            }
            else {
                setLoading(false);
                alert('Something went wrong. Please try again');
            }
        }
    };




    if (loading) return <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <h2 className="text-2xl text-[#333]">User is loading</h2>
    </div>

    return (
        <form className="flex flex-col gap-2 max-w-md" onSubmit={handleSubmit(handleRegistration)}>
            <div className="flex">
                <input
                    placeholder="Place your email here"
                    className={inputstate}
                    type="email"
                    {...register('email')}
                />
            </div>
            <div className="flex">
                <input
                    placeholder="Password"
                    className={inputstate}
                    type="password"
                    {...register('password')}
                />
            </div>
            <Button variant={'default'}>Login</Button>
        </form>
    )
}

export default LoginForm;