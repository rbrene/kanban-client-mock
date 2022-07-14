import styled, { createGlobalStyle } from 'styled-components';
import { rem } from '../helpers/units';
import { animated as a } from '@react-spring/web';


const GlobalStyles = createGlobalStyle`
:root {
    --primaryBrightRed: #ff004c;
    --primaryBrightRedLight: #dd285e;
    --primaryDark: #19191d;
    --primaryDarkDesaturated: #2e2e35;
    --primaryAccent: #d42257;
    --primaryAccentLight: #6e6eff;
    --accent: #d4d4ff;
    --accentWhite: #ffffff;
}
html {
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    box-sizing: border-box;
    z-index: 0;
}
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
*{
    scroll-behavior: smooth;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: ${rem(14)};
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(223, 223, 223, 0.502);
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        display: block;
        border-radius: ${rem(50)};
        background: #c42f4f;
    }
}
body,
#root {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: ${rem(16)};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    background: #1c1b22;
    color: var(--accentWhite);
    z-index: inherit;
}
`;

export default GlobalStyles;

export const AppWrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
`;


export const ModalWrapper = styled(a.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 100;
`;

export const ModalBackdrop = styled(a.div)`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    backdrop-filter: blur(${rem(2)});
    z-index: inherit;
    cursor: pointer;
`;