import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Router from './Router';

const GlobalStyle = createGlobalStyle`
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

  @font-face {
    font-family: 'NanumSquare_ac';
    src: url('fonts/NanumSquare_acEB.eot');
    src: url('fonts/NanumSquare_acEB.eot?#iefix') format('embedded-opentype'),
        url('fonts/NanumSquare_acEB.woff2') format('woff2'),
        url('fonts/NanumSquare_acEB.woff') format('woff'),
        url('fonts/NanumSquare_acEB.ttf') format('truetype'),
        url('fonts/NanumSquare_acEB.svg#NanumSquare_acEB') format('svg');
    font-weight: 800;
    font-style: normal;
    font-display: block;
}

  @font-face {
      font-family: 'NanumSquare_ac';
      src: url('fonts/NanumSquare_acB.eot');
      src: url('fonts/NanumSquare_acB.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquare_acB.woff2') format('woff2'),
          url('fonts/NanumSquare_acB.woff') format('woff'),
          url('fonts/NanumSquare_acB.ttf') format('truetype'),
          url('fonts/NanumSquare_acB.svg#NanumSquare_acB') format('svg');
      font-weight: bold;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'NanumSquare_ac';
      src: url('fonts/NanumSquare_acL.eot');
      src: url('fonts/NanumSquare_acL.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquare_acL.woff2') format('woff2'),
          url('fonts/NanumSquare_acL.woff') format('woff'),
          url('fonts/NanumSquare_acL.ttf') format('truetype'),
          url('fonts/NanumSquare_acL.svg#NanumSquare_acL') format('svg');
      font-weight: 300;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'NanumSquare_ac';
      src: url('fonts/NanumSquare_acR.eot');
      src: url('fonts/NanumSquare_acR.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquare_acR.woff2') format('woff2'),
          url('fonts/NanumSquare_acR.woff') format('woff'),
          url('fonts/NanumSquare_acR.ttf') format('truetype'),
          url('fonts/NanumSquare_acR.svg#NanumSquare_acR') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'NanumSquare';
      src: url('fonts/NanumSquareB.eot');
      src: url('fonts/NanumSquareB.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquareB.woff2') format('woff2'),
          url('fonts/NanumSquareB.woff') format('woff'),
          url('fonts/NanumSquareB.ttf') format('truetype'),
          url('fonts/NanumSquareB.svg#NanumSquareB') format('svg');
      font-weight: bold;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'NanumSquare';
      src: url('fonts/NanumSquareEB.eot');
      src: url('fonts/NanumSquareEB.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquareEB.woff2') format('woff2'),
          url('fonts/NanumSquareEB.woff') format('woff'),
          url('fonts/NanumSquareEB.ttf') format('truetype'),
          url('fonts/NanumSquareEB.svg#NanumSquareEB') format('svg');
      font-weight: 800;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'NanumSquare';
      src: url('fonts/NanumSquareR.eot');
      src: url('fonts/NanumSquareR.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquareR.woff2') format('woff2'),
          url('fonts/NanumSquareR.woff') format('woff'),
          url('fonts/NanumSquareR.ttf') format('truetype'),
          url('fonts/NanumSquareR.svg#NanumSquareR') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: block;
  }

  @font-face {
      font-family: 'NanumSquare';
      src: url('fonts/NanumSquareL.eot');
      src: url('fonts/NanumSquareL.eot?#iefix') format('embedded-opentype'),
          url('fonts/NanumSquareL.woff2') format('woff2'),
          url('fonts/NanumSquareL.woff') format('woff'),
          url('fonts/NanumSquareL.ttf') format('truetype'),
          url('fonts/NanumSquareL.svg#NanumSquareL') format('svg');
      font-weight: 300;
      font-style: normal;
      font-display: block;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    background-image: url('/images/background.png');
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
