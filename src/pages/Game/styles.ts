import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const RowsContainer = styled.div`
    width: min(calc(100vh / 3));
    max-width: 400px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;

    &.active .cell {
        background-color: #000 !important;
        cursor: pointer !important;
    }
`;

export const Cell = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: calc(100vh / 17);
    font-size: 2vw;
    color: white;
    background-color: var(--color-gray);
    border: solid 3px var(--color-gray);
    border-radius: 4px;
    margin: 5px;
    line-height: 1.4;
    cursor: default;

    @media (max-width: ${breakpoints.xl}px) {
        font-size: 3vw;
    }

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 4vw;
    }

    @media (max-width: ${breakpoints.md}px) {
        font-size: 7vw;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 8vw;
    }

    &.active {
        position: relative;
        border-color: var(--color-purple);
        transform: translateY(-3px);

        & > span {
            transform: translateY(-3px);
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 5px;
            background-color: var(--color-purple);
        }
    }

    &.wrong {
    }

    &.wrong-position {
        background-color: var(--color-yellow);
        border-color: var(--color-yellow);
        color: var(--color-dark);
    }

    &.correct {
        background-color: var(--color-green);
        border-color: var(--color-green);
        color: var(--color-dark);
    }
`;
