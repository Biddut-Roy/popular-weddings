import { useLoaderData } from "react-router-dom";
import FoodDetails from "./FoodDetails";

const Food = () => {
    const food = useLoaderData();
    return (
       <div className=" grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-5 w-10/12 md:w-3/4 lg:w-2/3 mx-auto  my-10">
        {
            food.map((item , idx) => <FoodDetails key={idx} item={item}></FoodDetails>)
        }
       </div>
    );
};

export default Food;