// src/App.js
import React from 'react';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Inspirational Quotes</h1>
      <QuoteList />
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
};

export default App;

