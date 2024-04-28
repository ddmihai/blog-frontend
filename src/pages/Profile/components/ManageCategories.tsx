




const ManageCategories = ({ categories }:
    {
        categories: TCategory[] | undefined
    }) => {




    return (
        <details className="border py-3 px-4 rounded-lg mt-4">
            <summary className="text-lg font-semibold">Manage categories</summary>
            <div>

                {/* Manage and map over categories */}
                <p className='font-thin underline py-4'>Click on category to manage individually</p>


                {
                    categories && categories.map(element => (
                        <div
                            className='my-2 first-letter:uppercase'
                            key={element._id}>{element.categoryName}</div>
                    ))
                }
            </div>
        </details>
    )
}

export default ManageCategories
