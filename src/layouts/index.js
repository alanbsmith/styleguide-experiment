import React, { Fragment } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Link from 'gatsby-link';
import styled from 'styled-components';

import buildGlobalStyles from '../utils/buildGlobalStyles';
import theme from '../utils/theme';

import LeftNav from '../components/LeftNav';
import menus from '../components/LeftNav/menus';

injectGlobal([buildGlobalStyles(theme)]);


function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutBlock>
        <Header>
          <h1>Style Guide Experiment</h1>
        </Header>
        <Content>
          <Nav>
            <LeftNav menus={menus} />
          </Nav>
          <Body>
            {children()}
          </Body>
        </Content>
      </LayoutBlock>
    </ThemeProvider>
  )
}

export default Layout;


const LayoutBlock = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
`;

const Header = styled.header`
  border-bottom: solid 1px ${props => props.theme.colors.chrome200};
  height: 5rem;
`

const Content = styled.section`
  display: flex;
  flex: 1;
`;

const Nav = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 5rem);
`

const Body = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 5rem);
  flex: 1;
  overflow-y: scroll;
`
