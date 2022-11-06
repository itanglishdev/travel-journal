
function Card({name, location,startDate, endDate, description,image}) {


    return (
        <div className="card">
               <img src={image} alt="" />
               <div className="card__info-tab">
                <p className="card__location">{location}</p>
                <h3 className="card__name">{name}</h3>
                <p className="card__duration">from {startDate} to {endDate}</p>
                <p className="card__descrition">{description}</p>
               </div>
        </div>
      );
}

export default Card;