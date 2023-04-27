export default function Card(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      <h2>{props.location}</h2>
      <a href={props.googleMapsUrl}>View on Google Maps</a>
      <h1>{props.title}</h1>
      <h3>{props.startDate} - {props.endDate}</h3>
      <p>{props.description}</p>
    </div>
  )
}
