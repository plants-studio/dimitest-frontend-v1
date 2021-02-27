import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Router from './Router';

const GlobalStyle = createGlobalStyle`
  // TODO Check the font list with the designer and add the font face in five forms: TTF, EOT, SVG, WOFF, and WOFF2

  @font-face {
    font-family: 'NEXON Football Gothic L';
    src: url('/fonts/NEXONFootballGothicL.eot');
    src: url('/fonts/NEXONFootballGothicL.eot?#iefix') format('embedded-opentype'),
        url('/fonts/NEXONFootballGothicL.woff2') format('woff2'),
        url('/fonts/NEXONFootballGothicL.woff') format('woff'),
        url('/fonts/NEXONFootballGothicL.ttf') format('truetype'),
        url('/fonts/NEXONFootballGothicL.svg#NEXONFootballGothicL') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }

  @font-face {
      font-family: 'NEXON Football Gothic B';
      src: url('/fonts/NEXONFootballGothicB.eot');
      src: url('/fonts/NEXONFootballGothicB.eot?#iefix') format('embedded-opentype'),
          url('/fonts/NEXONFootballGothicB.woff2') format('woff2'),
          url('/fonts/NEXONFootballGothicB.woff') format('woff'),
          url('/fonts/NEXONFootballGothicB.ttf') format('truetype'),
          url('/fonts/NEXONFootballGothicB.svg#NEXONFootballGothicB') format('svg');
      font-weight: bold;
      font-style: normal;
      font-display: block;
  }

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
