


const HowToUse = () => {
    return (
        <section className='flex flex-wrap gap-4 py-4'>
            <aside className='border p-4 rounded-lg flex-1 basis-[350px]'>
                <h2 className='text-lg font-semibold'>How to create a blog?</h2>

                <ul className="list-inside text-sm flex flex-col gap-3">
                    <li className="mt-4">Navigate to the <strong>create</strong> blog section</li>
                    <li>Make sure there is already a category created</li>
                    <li>Follow the instruction provided in the section</li>
                    <li>Save the blog</li>
                    <li>Good work!</li>
                </ul>
            </aside>

            <aside className='border p-4 rounded-lg flex-1 basis-[350px]'>
                <h2 className='text-lg font-semibold'>Why use this blog?</h2>

                <p className="text-sm my-3">
                    This blog is created to store a personalised journal of projects created, having a comprehensive and detailed instructions,
                    analysis of technical choices and more
                </p>

                <p className="text-sm mt-4">
                    You can store here code blocks, images, and take advantages of our markdown features to create personalised blogs
                </p>
            </aside>
        </section>
    )
}

export default HowToUse
