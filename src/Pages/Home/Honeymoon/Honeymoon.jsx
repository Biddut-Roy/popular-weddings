import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Honeymoon = () => {
    const [honeymoonData, setHoneymoonData] = useState([]);
    
    useEffect(() => {
        fetch("../../../../honeymoon.json")
            .then(res => res.json())
            .then(data => setHoneymoonData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
      AOS.init({
        duration: 2000,
        easing: 'ease-in-out',
      });
    }, []);


    return (
        <div data-aos="zoom-in-down" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-10/12 mx-auto gap-10 my-10">
          {honeymoonData.map((item) => (
            <div key={item.id} className="flex-wrap"> 
              <div className="card glass flex">
                <figure>
                  <img src={item.photo} alt={item.package} />
                </figure>
                <div className="card-body w-2/3 mx-auto">
                  <h2 className="card-title">{item.package}</h2>
                  <p>Price: ${item.Prices}</p>
                  <div className="card-actions justify-end">
                    <p>Location: {item.location}</p>
                  </div>
                  <p className=" text-xl font-semibold text-blue-500">Contact Our Social Media</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      
};

export default Honeymoon;
