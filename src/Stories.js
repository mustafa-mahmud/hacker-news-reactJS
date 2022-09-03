import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { loading, hits } = useGlobalContext();

  if (loading) return <div className="loading"></div>;

  return (
    <section className="stories">
      {hits.map((hit) => {
        const {
          title,
          points,
          author,
          url,
          num_comments: comments,
          objectID: id,
        } = hit;

        return (
          <article key={id} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {comments} comments{' '}
            </p>

            <div>
              <a
                href={url}
                target="_blank"
                className="read-link"
                rel="noreferrer"
              >
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
