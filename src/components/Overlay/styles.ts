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
    max-height: 90vh;

    @media (max-width: ${breakpoints.md}px) {
        top: 30px;
    }
`;
export const PanelContent = styled.div`
    color: white;
    padding: 0 45px;
    margin: 45px 0;
    overflow-y: auto;
    max-height: 80vh;

    @media (max-width: ${breakpoints.md}px) {
        top: 30px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none;
    background-color: var(--color-gray);
    border-radius: 3px;

    &::before {
        content: '';
        display: inline-block;
        width: 3px;
        height: 13px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        background-color: white;
        border-radius: 3px;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 3px;
        height: 13px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: white;
        border-radius: 3px;
    }
`;
