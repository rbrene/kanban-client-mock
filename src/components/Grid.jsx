import styled from 'styled-components';
import { rem, em } from '../helpers/units';


export const Grid = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${props => props.$collapse ? `100%` : `${rem(204.9)} 1fr`};
    grid-template-rows: ${rem(64)} 1fr;
    z-index: inherit;

    @media (max-width: ${em(767.98)}) {
        grid-template-columns: 100%;
    }
`;

export const GridItemHeader = styled.div`
    grid-column: 2;
    grid-row: 1;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;

    @media (max-width: ${em(767.98)}) {
        grid-column: 1;
    }
`;

export const GridItemBody = styled.div`
    grid-column: ${props => props.$collapse ? 1 : 2};
    grid-row: 2;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;

    @media (max-width: ${em(767.98)}) {
        grid-column: 1;
    }
`;