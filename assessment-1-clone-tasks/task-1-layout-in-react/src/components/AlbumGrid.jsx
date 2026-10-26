import React from 'react';
import heroImg from '../assets/hero.png';
import album1 from '../assets/all-encores.jpg';
import album2 from '../assets/articulation.jpg';
import album3 from '../assets/blurred.jpg';
import album4 from '../assets/encores-2.jpg';

export default function AlbumGrid() {
  return (
    <section className="album-showcase">
      {/* Featured Big Image on Left */}
      <div className="featured-album">
        <img src={heroImg} alt="Featured Album - Erased Tapes" />
      </div>

      {/* 2x2 Grid of Smaller Albums on Right */}
      <div className="album-subgrid">
        <div className="album-item">
          <img src={album1} alt="All Encores Album" />
        </div>
        <div className="album-item">
          <img src={album2} alt="Articulation Album" />
        </div>
        <div className="album-item">
          <img src={album3} alt="Blurred Album" />
        </div>
        <div className="album-item">
          <img src={album4} alt="Encores 2 Album" />
        </div>
      </div>
    </section>
  );
}