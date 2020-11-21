import React from 'react';
import styled from 'styled-components';
import { changeLocale } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

const NavStyles = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 2rem;
`;

const Nav = () => {
  /* function toggleLanguage(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    language: string
  ) {
    e.preventDefault();
    changeLocale(language);
  } */
  return (
    <NavStyles>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>

      <a onClick={() => changeLocale('en')}>test</a>
    </NavStyles>
  );
};

export default Nav;
