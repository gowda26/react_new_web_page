// src/components/QuoteList.js
import React, { useRef, useState } from 'react';
import Quote from './Quote';
import './QuoteList.css';

const QuoteList = () => {
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    
  ];

  const quoteListRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {

    if (quoteListRef.current) {
      const newScrollPosition = scrollPosition + window.innerWidth;
      setScrollPosition(newScrollPosition);
      quoteListRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (quoteListRef.current) {
      const newScrollPosition = Math.max(scrollPosition - window.innerWidth, 0);
      setScrollPosition(newScrollPosition);
      quoteListRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="quoteListContainer">
      <button className="navButton prevButton" onClick={handlePrev}>❮</button>
      <div className="quoteScrollContainer" ref={quoteListRef}>
        {quotes.map((quote, index) => (
          <Quote key={index} text={quote.text} author={quote.author} />
        ))}
      </div>
      <button className="navButton nextButton" onClick={handleNext}>❯</button>
    </div>
  );
};

export default QuoteList;
