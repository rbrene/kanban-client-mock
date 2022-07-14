import styled from 'styled-components';
import { animated as a } from '@react-spring/web';
import { rem, em } from '../helpers/units';


export const Nav = styled(a.nav)`
    grid-column: 1;
    grid-row: 1/3;
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-grid;
    grid-template-rows: ${rem(64)} 1fr auto;
    gap: ${rem(16)};
    background: var(--primaryDark);
    color: var(--accent);
    z-index: 100;
    user-select: none;

    @media (max-width: ${em(767.98)}) {
        grid-column: -1;
    }
`;

export const BrandWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-flex;
    z-index: inherit;

    @media (min-width: ${em(767.98)}) {
        &::after {
            content: '';
            position: absolute;
            right: ${rem(16)};
            bottom: 0;
            width: 100%;
            height: ${rem(3)};
            background: var(--primaryBrightRed);
            border-radius: ${rem(50)};
            filter: opacity(50%);
        }
    }

`;

export const Brand = styled.h2`
    position: relative;
    margin-block: auto;
    margin-left: ${rem(8)};
    font-size: clamp(${rem(16)}, 4vw ${rem(32)});
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1ch;
`;

export const NavListWrapper = styled.div`
    position: relative;
    overflow-y: auto;
`;

export const NavListHeading = styled.small`
    font-size: clamp(${rem(8)},1vw, ${rem(10)});
    font-family: inherit;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3ch;
    margin-left: ${rem(8)};
    opacity: 0.7;
`;

export const NavList = styled(a.ul)`
    position: relative;
    width: calc(100% - ${rem(16)});
    height: max-content;
    margin-block: ${rem(8)};
`;

export const NavListItem = styled(a.li)`
    position: relative;
    width: 100%;
    height: ${em(48)};
    font-size: clamp(${rem(8)}, 1vw, ${rem(12)});
    font-weight: 500;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    border-radius: 0 ${rem(50)}  ${rem(50)} 0;
    letter-spacing: 0.1ch;
    background: linear-gradient(to right, var(--primaryBrightRed) 0%, transparent 100%);
    background-size: 5000%;
    background-position: right;
    z-index: 110;
    cursor: pointer;
    svg {
        position: relative;
        width: 100%;
        height: auto;
        padding-inline: ${rem(8)};
    }
`;

export const CreateNewBoard = styled(a.button)`
    position: relative;
    width: calc(100% - ${rem(32)});
    height: ${em(48)};
    font-size: clamp(${rem(8)}, 1vw, ${rem(12)});
    font-family: inherit;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 0.08ch;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    background: none;
    color: var(--primaryBrightRedLight);
    outline: none;
    border: none;
    cursor: pointer;

    svg {
        position: relative;
        width: 100%;
        height: auto;
        padding-left: ${rem(8)};
        stroke: var(--primaryBrightRedLight);
        stroke-width: ${rem(0.5)};
    }

    &:active {
        font-weight: 300;
    }

    span {
        text-align: left;
        padding-left: ${rem(8)};
    }
`;

export const NavCtaWrapper = styled.div`
    position: relative;
    width: calc(100% - ${rem(32)});
    height: 100%;
    display: inline-grid;
    grid-template-rows: repeat(2, ${rem(40)});
    gap: ${rem(8)};
    margin: auto;
    padding-block: ${rem(16)};
`;


export const NavThemeToggleWrapper = styled.div`
    grid-row: 1;
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-flex;
    place-items: center;
    place-content: center;
    gap: ${rem(16)};
    margin-inline: auto;
    background: #1c1b22;
`;

export const ToggleTheme = styled.input`
    position: relative;
    width: ${rem(40)};
    height: ${rem(20)};
    appearance: none;
    background: var(--primaryBrightRed);
    outline: none;
    border-radius: ${rem(50)};
    z-index: 0;
    cursor: pointer;
    &[type='checkbox']::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        transform: scale(70%);
        border-radius: ${rem(50)};
        background: var(--accentWhite);
        transition: all 300ms ease-in-out;
    }
    &:checked[type='checkbox']::after {
        left: ${rem(18)};
    }
`;

export const NavToggleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    font-size: ${rem(11)};
    display: inline-flex;
    place-items: center;
    place-content: center;
    color: var(--accent);
    cursor: pointer;

    svg {
        margin-inline: ${rem(8)};
        position: relative;
        width: ${rem(16)};
        height: ${rem(16)};
    }
`;

