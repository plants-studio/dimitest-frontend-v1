import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Router from './Router';

const GlobalStyle = createGlobalStyle`
  // TODO Check the font list with the designer and add the font face in four forms: TTF, OTF, WOFF, and WOFF2

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  * {
    color: #404040;
  }
`;

const Wrapper = styled(BrowserRouter)`
  flex: 1 0 auto;
  padding-bottom: 20px;
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Router />
    </Wrapper>
  </>
);

export default App;
