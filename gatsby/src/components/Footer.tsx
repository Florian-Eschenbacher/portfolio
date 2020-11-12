import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 2rem;
  box-sizing: border-box;
`;

const IconLinkStyles = styled.a`
  width: 3rem;
  height: 3rem;
  svg {
    height: 100%;
    width: 100%;
  }
`;

const Footer = () => (
  <FooterStyles>
    <IconLinkStyles href="https://github.com/Florian-Eschenbacher">
      <AiFillGithub />
    </IconLinkStyles>
    <IconLinkStyles href="https://www.linkedin.com/in/florian-eschenbacher-b703a591/">
      <AiFillLinkedin />
    </IconLinkStyles>
    <IconLinkStyles href="mailto:kopflaster@gmail.com">
      <AiOutlineMail />
    </IconLinkStyles>
    <Link to="/privacy">Privacy</Link>
    <Link to="/impressum">Impressum</Link>
  </FooterStyles>
);

export default Footer;
