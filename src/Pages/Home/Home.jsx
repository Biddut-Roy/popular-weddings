import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "./Services/Services";


const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <div className=" w-11/12 mx-auto">
                <Banner></Banner>
            </div>
            <div>
                {
                    data?.map(data =><Services key={data.id} data={data}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;