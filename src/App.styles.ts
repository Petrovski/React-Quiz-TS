import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    /* background-image: url(${BGImage}); */
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem;
  }

  .score {
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  .start-btn,
  .next-question-btn {
    cursor: pointer;
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 2rem;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(150, 200, 150);
      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darkgreen;
      transition: all 0.3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }

  .start-btn {
    max-width: 200px;
  }

  .next-question-btn {
    display: block;
    margin: 0 auto;
  }
`;
