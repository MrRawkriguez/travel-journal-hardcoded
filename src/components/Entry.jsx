import MapMarker from '../path.png'
import './Entry.css'

function Entry () {
    return(
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fugi" />
            </div>
            <div className='info-container'>
                <div className='info-flex'>
                    <img className='marker' src={MapMarker} alt="map marker icon"/>
                    <span className='country'>Japan</span>
                    <a className='map-link' href="https://g.co/kgs/xYSCzpN">View on Google Maps</a>
                </div>
            <div className='entry-title'>Mount Fuji</div>
            <div className='trip-date'><p>12 Jan, 2021 -24 Jan, 2021</p></div>
            <div className='entry-text'><p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourist.
            </p></div>
            </div>

        </article>
    )
}

export default Entry