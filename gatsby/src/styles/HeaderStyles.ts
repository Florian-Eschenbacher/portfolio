import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from {
    background-position: 200%;
  }
  to {
    background-position: 0;
  }
}`;

export const HeaderStyles = styled.header`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

export const TextRevealStyles = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  animation: ${reveal} 2s linear 1;
  background-size: 200%;
  margin-top: 2rem;
  text-transform: uppercase;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;
