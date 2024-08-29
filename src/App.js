import React from 'react';
import QuoteList from './components/QuoteList';
import './App.css';
import { Container, Header, Button, Card } from './components/StyledComponents';


function App() {
  return (

    <div style={styles.appContainer}>
    <Container>
        <Header>Welcome to My Styled Page</Header>
        <h2 style={styles.header}>Inspirational Quotes</h2>
        <Card>
        <QuoteList />
        </Card>
        <Card>
            <p>This is a card component with some text.</p>
            <Button>Click Me</Button>
        </Card>
    </Container>
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
