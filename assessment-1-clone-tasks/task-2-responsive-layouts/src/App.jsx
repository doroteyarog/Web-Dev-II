import React from 'react';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="content-container">
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}