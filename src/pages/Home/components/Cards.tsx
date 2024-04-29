import { Code2Icon, InfoIcon } from "lucide-react"



const Cards = () => {
    return (
        <section>
            <h2 className="text-4xl font-bold text-[#333] mt-10 mb-4">Short Description</h2>

            <div className="flex flex-wrap text-white p-4 gap-4">

                <div className="basis-[350px] py-5 flex-1 max-w-sm rounded-xl bg-[#333] p-4 flex flex-col gap-3 justify-center">
                    <Code2Icon size={40} color="white" />
                    <h3 className="text-2xl">Coding Examples</h3>
                    <p>Discover quick coding snippets with descriptions that you can seamlessly integrate into your projects.</p>
                </div>

                <div className="basis-[350px] py-5 flex-1 max-w-sm rounded-xl bg-[#333] p-4 flex flex-col gap-3">
                    <InfoIcon size={40} color="white" />
                    <h3 className="text-2xl">Portfolio Project Description</h3>
                    <p>This section provides insights into projects that demonstrate my expertise and capabilities, detailing the challenges addressed, solutions implemented, and overall impact.</p>
                </div>

                <div className="basis-[350px] py-5 flex-1 max-w-sm rounded-xl bg-[#333] p-4 flex flex-col gap-3">
                    <InfoIcon size={40} color="white" />
                    <h3 className="text-2xl">Document Management</h3>
                    <p>Efficiently organize and manage your documents with ease. Streamline your workflow by storing, accessing, and sharing documents securely.</p>
                </div>


            </div>
        </section>

    )
}

export default Cards
