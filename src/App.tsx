import React from 'react';
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
  background-color: var(--props-default-background-color);
  color: var(--props-default-font-color);
  min-height: 100vh;
`;

export default App;
