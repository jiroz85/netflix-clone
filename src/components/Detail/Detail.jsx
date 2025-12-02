import "./Detail.css";

function Detail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>
          ×
        </button>
        <div className="detail-content">
          <img src={movie.image} alt={movie.title} className="detail-image" />
          <div className="detail-info">
            <h1 className="detail-title">{movie.title}</h1>
            <div className="detail-meta">
              <span>{movie.year}</span>
              <span>{movie.genre}</span>
              <span>{movie.rating}</span>
            </div>
            <p className="detail-description">{movie.description}</p>
            <div className="detail-buttons">
              <button className="detail-play">▶ Play</button>
              <button className="detail-mylist">+ My List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
