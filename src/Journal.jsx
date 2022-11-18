export default function Journal(props) {
    console.log(props)
    return (
        <div className="journal">
            <img className="journal--image" src={props.journal.imageUrl} alt="" />
            <div className="journal--content">
                <span className="location-icon"><i class="bi bi-geo-alt-fill"></i></span>
                <span className="journal--location">{props.journal.location}</span>
                <span className="journal--google-map"><a href={props.journal.googleMapsUrl}>View on Google Maps</a></span>
                <h2 className="journal--heading">{props.journal.title}</h2>
                <p className="journal--date">{props.journal.startDate} - {props.journal.endDate}</p>
                <p className="journal--description">{props.journal.description}</p>
            </div>
        </div>
    )
}