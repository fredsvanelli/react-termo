import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

export const RowsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    width: 100%;
    max-width: 400px;
`;

export const Row = styled.div`
    display: flex;
    flex: 1;
    flex-grow: 1;
    justify-content: center;

    &.active .cell {
        background-color: #000 !important;
        cursor: pointer !important;
    }

    @media (max-height: 719px) {
        max-height: 20%;
        display: none;

        &.active,
        &.confirmed {
            display: flex;
        }
    }
`;

export const Cell = styled.button`
    position: relative;
    display: flex;
    flex: 1;
    font-size: 2vw;
    color: white;
    background-color: var(--color-gray);
    border: solid 3px var(--color-gray);
    border-radius: 4px;
    margin: 5px;
    cursor: default;

    & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

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
            transform: translate(-50%, -55%);
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: -1px;
            right: -1px;
            height: 6px;
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
