import React from 'react';
import QuoteList from './components/QuoteList';
import './App.css';

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
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '600',
  },
};

export default App;
