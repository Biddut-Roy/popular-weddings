import PropTypes from 'prop-types';


const FavoriteShow = ({item}) => {
    const { Location_name, Details, photo } = item;

    return (
        <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure><img src={photo} alt="event" /></figure>
          <div className="card-body w-2/3 mx-auto">
            <h2 className="card-title">Place: {Location_name}</h2>
            <p>{Details}</p>
            {item.feature.map((list , idx) => <li key={idx}>{list}</li>)}
          </div>
        </div>
      </div>
    );
};
FavoriteShow.propTypes = {
    item: PropTypes.object.isRequired,
  };

export default FavoriteShow;