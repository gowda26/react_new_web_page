// src/components/Quote.js
import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div className="quoteContainer">
      <p className="quoteText">"{text}"</p>
      <p className="quoteAuthor">- {author}</p>
    </div>
  );
};

export default Quote;
