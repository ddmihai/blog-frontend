import React, { ChangeEventHandler } from "react"







interface IAllCategories {
    categories: TCategory[] | undefined,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>
}

const AllCategories = ({ categories, setSelectedCategory }: IAllCategories) => {


    const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => setSelectedCategory(event.target.value);

    return (
        <select onChange={handleChange} className="py-2 px-4 border rounded-lg w-full ">
            <option value="" defaultChecked>Select category</option>
            {
                categories?.map(element => (
                    <option
                        key={element._id}
                        value={element._id}>{element.categoryName}</option>
                ))
            }
        </select>
    )
}

export default AllCategories
