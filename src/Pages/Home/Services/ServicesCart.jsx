import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";



const ServicesCart = () => {
    const {id}=useParams()
    const Services =useLoaderData()

    const findServices = Services.find(services => services.id == id)
    const {starting_price , maximum_capacity}= findServices.prices;

    const handleAddToFavorites = ()=>{
        const addfavorit = [];
        const favoritLocation = JSON.parse(localStorage.getItem("favorites"));

        if(!favoritLocation){
            addfavorit.push(findServices)
            localStorage.setItem('favorites', JSON.stringify(addfavorit))
            swal("Good job!", "location added successfully!", "success");
        }else{
            const isExit = favoritLocation.find(findLocation => findLocation.id === findServices.id);
            
            if (!isExit) {
                addfavorit.push(...addfavorit , favoritLocation)
                  location.setItem('favorites', JSON.stringify(addfavorit))
                  swal("Good job!", "Location added successfully!", "success");
            }else {
                swal("Error!", "No duplicate !", "error");}
        }
    }

    return (
        <div className="flex justify-center items-center h-[80vh]">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={findServices.photo} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {findServices.Location_name}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {findServices.Details}
            </h4>
            <h4 className="mb-2 block font-sans text-xl font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">
              {findServices.feature.map((feature , idx )=> <li key={idx}>{feature}</li>)}
            </h4>
            <h4 className="mb-2 block font-sans text-xl font-normal leading-snug tracking-normal text-blue-gray-900 antialiased">
              <p>starting_price: ${starting_price}</p>
              <p>maximum_capacity: {maximum_capacity}</p>
            </h4>
  
            <a className="inline-block" href="#">
              <button
              onClick={handleAddToFavorites}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add To favorites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default ServicesCart;