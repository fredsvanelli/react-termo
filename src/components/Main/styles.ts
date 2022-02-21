import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    @media (max-height: 719px) {
        height: 55vh;
    }
`;
