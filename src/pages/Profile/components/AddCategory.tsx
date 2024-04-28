import { axiosInstance } from "@/axios/axiosInstance";
import { Button } from "@/components/ui/button";
import { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";




const AddCategory = ({ setCategories }: { setCategories: Dispatch<SetStateAction<TCategory[] | undefined>> }) => {

    const { register, handleSubmit, reset } = useForm<TCategory>();

    const handleCreateCategory = async (dataPayload: TCreateCategory) => {
        try {
            let { data } = await axiosInstance.post('/createCategory', dataPayload);
            if (data) {
                alert(data.message);
                setCategories(data.categories);
                return reset();
            }
        }

        catch (error) {
            if (error instanceof AxiosError) {
                error.response?.status === 401 && alert(error.response.data.message);
                reset();
            }
            else {
                alert('Something went wrong. Please try again!');
                reset();
            }
        }
    }




    return (
        <details className="border py-3 px-4 rounded-lg">
            <summary className="text-lg font-semibold">Add a category</summary>

            <p className="font-thin my-4 underline">Please make sure that category is not already created</p>
            <form onSubmit={handleSubmit(handleCreateCategory)}
                className="flex flex-col gap-3 max-w-sm">

                <input
                    type="string"
                    required
                    placeholder="Category name"
                    className="border rounded-lg py-3 px-4 flex-1"
                    {...register('categoryName')}
                />

                <input
                    type="string"
                    required
                    placeholder="Category description"
                    className="border rounded-lg py-3 px-4 flex-1"
                    {...register('categoryDescription')}
                />


                <Button variant={'default'}>Create category</Button>
            </form>
        </details>
    )
}

export default AddCategory
