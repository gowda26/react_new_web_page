// src/components/Quote.js
import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div style={styles.quoteContainer}>
      <p style={styles.text}>"{text}"</p>
      <p style={styles.author}>- {author}</p>
    </div>
  );
};

const styles = {
  quoteContainer: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  author: {
    fontSize: '1em',
    fontStyle: 'italic',
    textAlign: 'right',
  },
};

export default Quote;

