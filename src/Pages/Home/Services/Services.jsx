import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Services = ({ data }) => {
  const { Location_name, Details, photo, id } = data;

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div data-aos="flip-left" className="card card-compact bg-base-100 shadow-xl flex">
      <figure><img src={photo} alt="event" /></figure>
      <div className="card-body w-2/3 mx-auto flex-wrap">
        <h2 className="card-title">Place: {Location_name}</h2>
        <p>{Details}</p>
        <div className="card-actions justify-end">
          <Link to={`/cartDetails/${id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Services;
