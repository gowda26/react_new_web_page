import styled, { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define CSS variables for theme
const theme = {
  primaryColor: '#4CAF50',
  secondaryColor: '#FF5722',
  backgroundColor: '#f0f0f0',
  textColor: '#333',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: ${theme.backgroundColor};
  animation: ${fadeIn} 1s ease-in-out;
`;

export const Header = styled.h1`
  font-size: 3rem;
  color: ${theme.textColor};
  margin-bottom: 1.5rem;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

export const Button = styled.button`
  background-color: ${theme.primaryColor};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  font-size: 1.25rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${theme.secondaryColor};
    transform: scale(1.05);
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  padding: 1.5rem;
  margin: 1.5rem;
  min-width: 250px;  /* Minimum width to ensure card doesn't get too small */
  max-width: 100%;   /* Maximum width to prevent it from growing too large */
  width: auto;       /* Allow width to auto adjust based on content */
  flex-grow: 1;      /* Allow card to grow if needed */
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
`;
