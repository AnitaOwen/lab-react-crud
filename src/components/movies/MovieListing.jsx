import {Link} from 'react-router-dom'
import "../shows/ShowListing.css"

const MovieListing = ({ movie:{id, title, description, listedIn, duration} }) => {
  return (
    <article className="show">
      <h3 className="title">
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p className="description">{description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {listedIn}
        </p>
        <p>
          <span>Duration:</span> {duration}
        </p>
      </aside>
    </article>
  )
}

export default MovieListing