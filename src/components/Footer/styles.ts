import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: auto;
    padding: 30px 0 0;

    & > div {
        max-width: 600px;
        margin: 0 auto;
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
