import React from 'react';

import { Container } from './styles';
import GlobalStyles from './styles/global';
import CovidMonitor from './pages/CovidMonitor';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        {/* <h1>Hello there!</h1> */}
        <CovidMonitor />
      </Container>
    </>
  );
}

export default App;
