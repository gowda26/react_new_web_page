// src/components/QuoteList.js
import React from 'react';
import Quote from './Quote';

const QuoteList = () => {
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  ];

  return (
    <div>
      {quotes.map((quote, index) => (
        <Quote key={index} text={quote.text} author={quote.author} />
      ))}
    </div>
  );
};

export default QuoteList;

