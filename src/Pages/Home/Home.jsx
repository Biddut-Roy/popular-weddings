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
            <div className=" my-10">
                              <h1 className=" font-bold text-center lg:text-4xl">Our Marriages  Services</h1>
            </div>
            <div className="grid grid-cols-1  md: grid-cols-2 lg:grid-cols-2 w-2/3 mx-auto gap-10 my-10">
                
                {
                    data?.map(data =><Services key={data.id} data={data}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;