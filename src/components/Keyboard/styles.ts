import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const KeyRow = styled.div`
    display: flex;
    align-items: stretch;

    &:nth-child(2) {
        margin-left: 30px;
    }
    &:nth-child(3) {
        margin-left: 60px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        &:nth-child(2) {
            margin-left: 5px;
        }
        &:nth-child(3) {
            margin-left: 10px;
        }
    }
`;

export const KeyCap = styled.button`
    display: inline-flex;
    flex: 1;
    min-width: 35px;
    height: 58px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 5px;
    color: white;
    font-size: 2rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-purple);

    &.key-enter {
        padding: 5px 50px;
    }

    &.key-delete {
        padding: 5px 10px;
        margin-left: 30px;
        flex: 2;
    }

    @media (max-width: ${breakpoints.md}px) {
        margin: 2px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 1rem;
        min-width: auto;
        height: 40px;

        &.key-delete {
            margin-left: 2px;
        }

        &.key-enter {
            padding: 5px 20px;
        }
    }

    & svg {
        color: white;
        fill: white;
    }

    &.correct {
        background-color: var(--color-green);
        color: var(--color-dark);
    }

    &.wrong-position {
        background-color: var(--color-yellow);
        color: var(--color-dark);
    }

    &.wrong {
        background-color: #333;
    }
`;
