import Keyboard from '../Keyboard';
import { Credits, FooterContainer } from './styles';

const Footer: React.FC = () => (
    <FooterContainer>
        <div>
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
        </div>
    </FooterContainer>
);

export default Footer;
