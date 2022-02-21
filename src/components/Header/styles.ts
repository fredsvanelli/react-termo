import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const HeaderContainer = styled.header`
    padding: 30px 0;

    @media (max-width: ${breakpoints.sm}px) {
        padding: 15px 0;
    }
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
        font-size: 3rem;
    }
`;

export const LogoCredit = styled.p`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 200;
    color: var(--color-purple);
    line-height: 1;
`;
