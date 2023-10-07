import { useEffect, useState } from "react";
import FavoriteShow from "./FavoriteShow";


const Favorite = () => {
    const [ favorites , setFavorites] = useState();


    useEffect(()=>{
        const favoritLocation = JSON.parse(localStorage.getItem("favorites"));
        setFavorites(favoritLocation)
        
    },[])
    return (
        <div className="grid grid-cols-1  md: grid-cols-2 lg:grid-cols-2 w-2/3 mx-auto gap-10 my-10">
            {
                favorites?.map(item => <FavoriteShow key={item.id} item={item}></FavoriteShow> )
            }
        </div>
    );
};

export default Favorite;