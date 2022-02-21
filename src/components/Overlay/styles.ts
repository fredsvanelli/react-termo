import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const Background = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);

    &.show {
        display: block;
    }
`;

export const Panel = styled.div`
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 30px);
    max-width: 600px;
    color: white;
    background-color: black;
    border-radius: 15px;
    padding: 45px;
    max-height: 90vh;
    overflow-y: auto;

    @media (max-width: ${breakpoints.md}px) {
        top: 30px;
    }
`;
