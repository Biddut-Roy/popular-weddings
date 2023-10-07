import PropTypes from 'prop-types';



const FoodDetails = ({item}) => {
    const {name ,type ,dishes ,itemList ,price} = item;
    return (
     
        <div className="relative flex w-full  flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
<div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
<p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
  {name}
</p>
<h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
  <span className="mt-2 text-2xl">$</span>{price}
  <span className="self-end text-2xl">/dishes</span>
</h1>
</div>
<div className="p-0">
<ul className="flex flex-col gap-4">
  <li className="flex items-center gap-4">
    <span className="rounded-full border border-white/20 bg-white/20 p-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        
        stroke="currentColor"
        aria-hidden="true"
        className="h-3 w-3"
      >
        <path
         
          d="M4.5 12.75l6 6 9-13.5"
        ></path>
      </svg>
    </span>
    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
      {
        type
      }
    </p>
  </li>
  <li className="flex items-center gap-4">
    <span className="rounded-full border border-white/20 bg-white/20 p-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        
        stroke="currentColor"
        aria-hidden="true"
        className="h-3 w-3"
      >
        <path
         
          d="M4.5 12.75l6 6 9-13.5"
        ></path>
      </svg>
    </span>
    <div className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
           <ul>
           {
                itemList?.map((dish, idx) => (
                <li className='ml-5' key={idx}>
                    {dish}
                    </li>
              ))
            }
           </ul>

    </div>
  </li>
  <li className="flex items-center gap-4">
    <span className="rounded-full border border-white/20 bg-white/20 p-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        
        stroke="currentColor"
        aria-hidden="true"
        className="h-3 w-3"
      >
        <path
          
          d="M4.5 12.75l6 6 9-13.5"
        ></path>
      </svg>
    </span>
    <div className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
           <ul>
           {
                dishes?.map((dish, idx) => (
                <li className='ml-5' key={idx}>
                    {dish}
                    </li>
              ))
            }
           </ul>
    </div>
  </li>
  
</ul>
</div>
<div className="mt-12 p-0">
<button
  className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
  data-ripple-dark="true"
>
  More Info
</button>
</div>
</div>

    );
};

FoodDetails.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      dishes: PropTypes.arrayOf(PropTypes.string),
      itemList: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number.isRequired,
    }).isRequired,}

export default FoodDetails;