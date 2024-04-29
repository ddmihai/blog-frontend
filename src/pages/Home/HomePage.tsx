import { useNavigate } from "react-router-dom"
import Banner from "./components/Banner"
import Cards from "./components/Cards";


const HomePage = () => {


    const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto">
            <Banner navigate={navigate} />
            <Cards />
        </section>
    )
}

export default HomePage
