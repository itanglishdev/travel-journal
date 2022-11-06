
function Card(props) {

// console.log(props);
    return (
        <div className="card">
               <img src={props.image.value} alt="HERE" />
               <div className="card__info-tab">
                  <p className="card__location">{props.location}</p>
                  <h2 className="card__name">{props.name}</h2>
                  <p className="card__duration">from {props.startDate} to {props.endDate}</p>
                  <p className="card__description">{props.description}</p>
               </div>
        </div>
      );
}

export default Card;