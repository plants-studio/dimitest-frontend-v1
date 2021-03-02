import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Result from './pages/Result';
import TermsOfService from './pages/TermsOfService';

const Container = styled.div`
  .enter {
    opacity: 0;
  }

  .enter.enter-active {
    opacity: 1;
    transition: opacity 150ms ease-out 300ms;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0;
    transition: opacity 150ms ease-out;
  }
`;

const TransitionGroupEx = styled(TransitionGroup)`
  position: relative;
`;

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const Router: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <TransitionGroupEx>
        <CSSTransition key={location.key} timeout={{ enter: 450, exit: 150 }}>
          <Section>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/result" component={Result} />
              <Route path="/tos" component={TermsOfService} />
              <Route component={NotFound} />
            </Switch>
          </Section>
        </CSSTransition>
      </TransitionGroupEx>
    </Container>
  );
};

export default Router;
