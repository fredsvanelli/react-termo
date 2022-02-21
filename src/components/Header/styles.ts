import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 12vh;
`;

export const Logo = styled.p`
    margin: 0;
    font-size: 5rem;
    color: white;
    line-height: 1;

    @media (max-width: ${breakpoints.md}px) {
        font-size: 4rem;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 2.5rem;
    }
`;

export const LogoCredit = styled.p`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 200;
    color: var(--color-purple);
    line-height: 1;
`;

export const ButtonLink = styled.button`
    text-decoration: underline;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    color: white;
`;
