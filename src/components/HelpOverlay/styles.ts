import styled from 'styled-components';

export const Title = styled.p`
    font-size: 1.5em;
    margin-bottom: 30px;
`;

export const WordContainer = styled.div`
    & > ul {
        list-style: none;
        display: flex;

        li {
            display: inline-block;
            padding: 8px 16px;
            margin-right: 4px;
            border: solid 2px var(--color-gray);
            background-color: var(--color-gray);
            color: white;
            border-radius: 3px;

            &.correct {
                background-color: var(--color-green);
                border-color: var(--color-green);
                color: var(--color-dark);
            }

            &.wrong-position {
                background-color: var(--color-yellow);
                border-color: var(--color-yellow);
                color: var(--color-dark);
            }

            &.wrong {
                background-color: var(--color-yellow);
                color: var(--color-dark);
            }
        }
    }
`;
