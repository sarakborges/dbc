import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const Global = createGlobalStyle`
  ${reset}

  :root{
    --lightGray: #2c2f3a;
    --darkGray: #1a1c23;
    --white: #fefefe;
    --blue: #0054a8;
  }

  body{
    display: flex;
    place-content: center;
    place-items: center;

    min-height: 100vh;
    
    background-color: var(--darkGray);
  }

  * { 
    box-sizing: border-box;

    color: var(--white);
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
`;
