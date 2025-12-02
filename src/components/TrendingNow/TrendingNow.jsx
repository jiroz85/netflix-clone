import { useState } from "react";
import "./TrendingNow.css";
import Card from "../Card/Card.jsx";
import Detail from "../Detail/Detail.jsx";
import { trendingData } from "../../data/trendingData.js";

function TrendingNow() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="trending-section">
      <h2 className="trending-title">Trending Now</h2>
      <div className="trending-container">
        {trendingData.map((movie, index) => (
          <Card
            key={movie.id}
            movie={movie}
            number={index + 1}
            onClick={() => handleCardClick(movie)}
          />
        ))}
      </div>
      {selectedMovie && (
        <Detail movie={selectedMovie} onClose={handleCloseDetail} />
      )}
    </section>
  );
}

export default TrendingNow;
