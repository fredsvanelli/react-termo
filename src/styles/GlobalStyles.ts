import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --color-blue: #6ae4fc;
        --color-purple: #a77ae4;
        --color-green: #34ff89;
        --color-yellow: #f0fb7f;
        --color-red: #e94444;
        --color-gray: #363841;
        --color-dark: #23252f;
        --color-white: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        min-height: 100vh;
    }

    body {
        margin: 0 15px;
        padding: 0;
        background-color: var(--color-dark);
    }

    body, button {
        font-family: 'Kanit', sans-serif;
    }

    button {
        cursor: pointer;

        &:focus-visible {
            outline: none;
        }
    }

    .container {
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .row { display: flex; flex-wrap: wrap;}

    .col { flex: 1; }
    .col-6 { width: 50%; }

    @media (min-width: 768px) {
        .col-md-3 { width: 25%; }
    }

    .d-flex { display: flex; }

    .text-center {text-align: center; }
    .text-red {color: var(--color-red); }
    .text-white {color: var(--color-white); }

    .color-purple { color: var(--color-purple); }

    .mb-3 { margin-bottom: 30px; }
    .mb-2 { margin-bottom: 15px; }
    .mb-0 { margin-bottom: 0; }
    
    .fs-2 { font-size: 2rem; };
    .fs-4 { font-size: 1rem; };

    .fw-200 { font-weight: 200; }
`;
