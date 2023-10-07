import { useLoaderData } from "react-router-dom";


const WeddingCard = () => {
    const card = useLoaderData();
    console.log(card);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-11/12 mx-auto gap-10 my-10">
        {card?.map((item) => (
          <div key={item.id} className="flex-wrap"> 
            <div className="card glass flex">
              <figure>
                <img src={item.img} alt={item.package} />
              </figure>
              <div className="card-body w-2/3 mx-auto">
                <h2 className="card-title">Minimum-Order: {item.minimum_order}</h2>
                <p>Price: ${item.price}</p>
                <div className="card-actions justify-end">
                  <p>Name: {item.card_name}</p>
                </div>
                <p className=" text-xl font-semibold text-blue-500">Contact by Social Media</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default WeddingCard;