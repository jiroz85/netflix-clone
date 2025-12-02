import "./Card.css";

function Card({ movie, number, onClick }) {
  return (
    <div className="trending-card" onClick={onClick}>
      <div className="card-number">{number}</div>
      <img src={movie.image} alt={movie.title} className="card-image" />
      <div className="card-overlay">
        <div className="netflix-logo">N</div>
        <div className="card-title">{movie.title}</div>
      </div>
    </div>
  );
}

export default Card;
