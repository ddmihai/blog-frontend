import { Button } from "@/components/ui/button"
import { NavigateFunction } from "react-router-dom"


const Banner = ({ navigate }: { navigate: NavigateFunction }) => {



    return (
        <div className="p-4 bg-slate-50 rounded-lg pb-16">
            <h1 className="text-4xl font-bold text-[#333] mt-10">Blogger developer</h1>
            <p className="text-xl mt-2">Welcome to my personal developer journal-blog</p>
            <Button onClick={() => navigate('/about')} className="mt-6">Explore more</Button>
        </div>
    )
}

export default Banner
