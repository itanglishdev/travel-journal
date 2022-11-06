
function Card(props) {

// console.log(props);
    return (
        <div className="card">
               <img src={props.image.value} alt="HERE" />
               <div className="card__info-tab">
                <p className="card__location">{props.location}</p>
                <h3 className="card__name">{props.name}</h3>
                <p className="card__duration">from {props.startDate} to {props.endDate}</p>
                <p className="card__descrition">{props.description}</p>
               </div>
        </div>
      );
}

export default Card;