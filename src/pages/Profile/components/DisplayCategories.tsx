



interface IAllCategories {
    categories: TCategory[] | undefined
}

const DisplayCategories = ({ categories }: IAllCategories) => {

    return (
        <div className="p-4 border rounded-lg max-w-md flex flex-col gap-3">
            <h2 className="text-lg font-bold text-[#333]">Categories available</h2>

            {categories && categories.map(category => (
                <div key={category._id}>
                    <p className="text-semibold text-[#333] first-letter:uppercase">{category.categoryName}</p>
                </div>
            ))
            }
        </div>
    )
}

export default DisplayCategories
