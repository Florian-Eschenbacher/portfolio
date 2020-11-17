import React from 'react';
import { HeaderStyles, TextRevealStyles } from '../styles/HeaderStyles';

import Nav from './Nav';

type HeaderProps = {
  siteTitle: string;
  description: string;
};

const Header = ({ siteTitle, description }: HeaderProps) => (
  <HeaderStyles>
    <Nav />
    <TextRevealStyles>
      <h1>{siteTitle}</h1>
      <h2>{description}</h2>
    </TextRevealStyles>
  </HeaderStyles>
);

export default Header;
