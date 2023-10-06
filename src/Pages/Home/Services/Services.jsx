import PropTypes from 'prop-types';

const Services = ({ data }) => {
  const { Location_name, Details, photo } = data;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={photo} alt="event" /></figure>
        <div className="card-body w-2/3 mx-auto">
          <h2 className="card-title">Places: {Location_name}</h2>
          <p>{Details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
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
