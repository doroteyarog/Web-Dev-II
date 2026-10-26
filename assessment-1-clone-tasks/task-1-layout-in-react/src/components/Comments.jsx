import React from 'react';

const commentsData = [
  {
    id: 1,
    username: 'soundseeker92',
    comment: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?"
  },
  {
    id: 2,
    username: 'Ted Baker',
    comment: "I've been following the label for years—so glad someone's finally writing about their impact."
  },
  {
    id: 3,
    username: 'Queen_of_noise',
    comment: "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling."
  }
];

export default function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>
      <div className="comments-list">
        {commentsData.map((item) => (
          <article key={item.id} className="comment-item">
            <h4 className="comment-username">{item.username}</h4>
            <p className="comment-text">{item.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}