import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import 'primeflex/primeflex.css';

const GlobalStyle = createGlobalStyle`

:root{
    --color-base-1: #000;
    --color-base-2: #202020;
    --colorbase-3: #ffff;
    --color-base-4:#03c4e8;
    
    --color-title-text-about-me: var(--color-base-4);
}

p, span, div {
    font-size: 12px;
    @media (min-width: 768px){
    font-size: 14px;
    }
    @media (min-width: 1200px){
    font-size: 16px;
    }
}

`;

export default GlobalStyle;