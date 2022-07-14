import styled from 'styled-components';
import { rem, em } from '../../helpers/units';
import { animated as a } from '@react-spring/web';


export const BoardFormContainer = styled(a.div)`
    position: relative;
    width: clamp(${rem(280)}, 8vw, ${rem(480)});
    padding: ${rem(16)};
    margin: auto;
    border-radius: ${rem(6)};
    background: var(--primaryDark);
    z-index: 200;
`;

export const BoardForm = styled.form`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    gap: ${rem(16)};

    h3 {
        font-size: ${rem(16)};
        font-weight: 400;
        letter-spacing: 0.06ch;
    }

    button {
        border: none;
        font-size: ${rem(11)};
        font-weight: 500;
        letter-spacing: 0.06ch;
        padding: ${rem(6)};
        background: var(--primaryAccent);
        border-radius: ${rem(50)};
    }
`;

export const FormControl = styled.fieldset`
    position: relative;
    width: 100%;
    display: inline-grid;
    gap: ${rem(8)};
    border: none;

    input {
        width: 100%;
        height: ${em(48)};
    }
`;

export const FormLabel = styled.label`
    position: relative;
    font-size: ${rem(11)};
    letter-spacing: 0.06ch;
    color: var(--accent);
`;

export const FormInput = styled.input`
    position: relative;
    font-size: ${rem(11)};
    font-family: inherit;
    font-weight: 500;
    letter-spacing: 0.06ch;
    padding: 0 ${rem(16)};
    background: none;
    border: 1px solid var(--primaryDarkDesaturated);
    border-radius: ${rem(4)};

    &::placeholder {
        letter-spacing: 0.06ch;
        color: var(--accent);
    }

    &:focus {
        outline: ${props => props.$error ? '1px solid var(--primaryBrightRedLight)' : '1px solid var(--primaryAccentLight)'};
    }
`;