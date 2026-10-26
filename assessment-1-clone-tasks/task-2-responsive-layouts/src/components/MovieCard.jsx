import React from 'react';

export default function MovieCard({ movie }) {
  return (
    <article className={`movie-card ${movie.cardType}`}>
      <div className="card-media">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
      </div>
      <div className="card-content">
        <div className="card-body">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-description">{movie.description}</p>
        </div>
        <div className="card-actions">
          <button type="button" className="btn-watch">WATCH NOW</button>
        </div>
      </div>
    </article>
  );
}