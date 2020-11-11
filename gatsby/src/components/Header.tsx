import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyles = styled.header`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

type HeaderProps = {
  siteTitle: string;
  description: string;
};

const Header = ({ siteTitle, description }: HeaderProps) => (
  <HeaderStyles>
    <Nav />
    <h1>{siteTitle}</h1>
    <h2>{description}</h2>
  </HeaderStyles>
);

export default Header;
