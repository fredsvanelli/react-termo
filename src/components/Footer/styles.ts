import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: auto;
    height: 35vh;
    padding: 30px 0 0;

    & > div {
        width: 100%;
    }
`;

export const Credits = styled.p`
    text-align: center;
    padding: 20px 0;
    color: #666;

    a {
        text-decoration: none;
        color: #888;

        &:hover {
            text-decoration: underline;
        }
    }
`;
