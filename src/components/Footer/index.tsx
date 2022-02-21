import Keyboard from '../Keyboard';
import { Credits, FooterContainer } from './styles';

const Footer: React.FC = () => (
    <FooterContainer>
        <Keyboard />
        <Credits>
            Criado por{' '}
            <a
                href="https://github.com/fredsvanelli/termo"
                target="_blank"
                rel="noopener noreferrer"
            >
                Fred Vanelli
            </a>
        </Credits>
    </FooterContainer>
);

export default Footer;
