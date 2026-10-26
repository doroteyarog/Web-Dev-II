import React from 'react';
import Header from './components/Header';
import ArticleHeader from './components/ArticleHeader';
import ArticleColumns from './components/ArticleColumns';
import AlbumGrid from './components/AlbumGrid';
import AuthorBio from './components/AuthorBio';
import Comments from './components/Comments';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="site-wrapper">
      <Header />
      
      {/* Central Content Card */}
      <main className="content-container">
        <article className="article-card">
          <ArticleHeader />
          <ArticleColumns />
          <AlbumGrid />
          <AuthorBio />
          <Comments />
        </article>
      </main>

      <Footer />
    </div>
  );
}