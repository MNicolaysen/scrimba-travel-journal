import "./Card.css";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="location-img">
          <img src={props.imageUrl} />
        </div>
        <div className="location-info">
        <h1>{props.title}</h1>
          <div className="location">
            <h3><span><i class="fa-solid fa-location-dot"></i></span>{props.location}</h3>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h4>{props.startDate} - {props.endDate}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <hr/>
    </div>
  );
}
