import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Card } from './schema';
import Dashboard from './components/Dashboard/Dashboard';

interface AppProps {
  schema: Card[]
}

function App({ schema }: AppProps) {
  return (
    <AppWrapper>
      <Dashboard cards={schema} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  --props-default-background-color: #0d0d0f;
  --props-focus-ring-color: #ff00ff;

  background-color: var(--props-default-background-color);
  color: white;
  min-height: 100vh;
`;

export default App;
