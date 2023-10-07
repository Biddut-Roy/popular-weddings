import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Services = ({ data }) => {
  const { Location_name, Details, photo ,id , } = data;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={photo} alt="event" /></figure>
        <div className="card-body w-2/3 mx-auto">
          <h2 className="card-title">Place: {Location_name}</h2>
          <p>{Details}</p>
          <div className="card-actions justify-end">
            <Link to={`/cartDetails/${id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Services;
