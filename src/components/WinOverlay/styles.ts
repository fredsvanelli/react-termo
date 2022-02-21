import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const Title = styled.p`
    font-size: 1.5em;
`;

export const Result = styled.p`
    font-size: 3em;
    text-transform: uppercase;
    color: var(--color-red);
    margin-bottom: 30px;

    &.won {
        color: var(--color-green);
    }
`;

export const RestartButton = styled.button`
    font-size: 2em;
    text-transform: uppercase;
    background-color: var(--color-red);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;

    &.won {
        background-color: var(--color-green);
        color: var(--color-dark);
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 1em;
    }
`;
