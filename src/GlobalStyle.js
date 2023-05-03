import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    vertical-align: baseline;
    -webkit-tap-highlight-color: transparent; 
    outline: none; 
    -ms-touch-action: manipulation; 
    touch-action: manipulation; 
    box-sizing: border-box;
  }

  *:focus { 
    -webkit-tap-highlight-color: transparent; 
    outline: none; 
    -ms-touch-action: manipulation; 
    touch-action: manipulation; 
  }
  html {
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    /* scroll-behavior: smooth; */
    font-size: 20px;
    ${(props) => props.theme.window.mobile} {
      font-size: 15px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6, th {
    font-family: 'SCoreDream';
    color: #222222;
  } 
    

  html, body, div, span, applet, object, iframe,
  p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    color: #666666;
  }
  body {
    width: 100%;
    user-select: none;
    -webkit-overflow-scrolling: none;
    
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, img {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  button > a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
  button:focus {
    outline: none !important;
  }
  input.primary {
    width: 100%;
    padding: 25px 26px;
    height: 80px;
    border: 1px solid #989898;
    border-radius: 10px;
    font-size: 13px;
    box-sizing: border-box;
    background: none;
    font-size: 1rem;
    color: #989898;
    ::placeholder {
      color: #989898;
      font-size: 1rem;
    }
    
    :disabled {
      background-color: #f2f2f2;
      color: #777;
    }
    &:focus {
      outline: none;
    }
    
  }





`;


export default GlobalStyle;
