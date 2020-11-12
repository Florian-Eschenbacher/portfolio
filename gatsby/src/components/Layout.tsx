/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import 'normalize.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';

const LayoutStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  main {
    margin-top: 5rem;
    margin-bottom: auto;
  }
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <LayoutStyles>
      <GlobalStyles />
      <Typography />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        description={data.site.siteMetadata?.description}
      />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  );
};

export default Layout;
