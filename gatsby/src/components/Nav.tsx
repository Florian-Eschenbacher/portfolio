import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 2rem;
`;

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </NavStyles>
);

export default Nav;
