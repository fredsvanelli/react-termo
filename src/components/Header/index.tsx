import { HeaderContainer, Logo, LogoCredit } from './styles';

const Header: React.FC = () => (
    <HeaderContainer>
        <div className="container text-center">
            <Logo>TERMO</Logo>
            <LogoCredit>Infinity</LogoCredit>
        </div>
    </HeaderContainer>
);

export default Header;
