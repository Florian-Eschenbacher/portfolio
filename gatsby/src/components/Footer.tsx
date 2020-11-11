import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 2rem;
  box-sizing: border-box;
`;

const Footer = () => (
  <FooterStyles>
    <Link to="/privacy">Privacy</Link>
    <Link to="/impressum">Impressum</Link>
  </FooterStyles>
);

export default Footer;
