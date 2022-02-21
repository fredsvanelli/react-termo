import { useGame } from '../../hooks/Game';
import { ButtonLink, HeaderContainer, Logo, LogoCredit } from './styles';

const Header: React.FC = () => {
    const { setShowHelp } = useGame();

    return (
        <HeaderContainer>
            <div className="row w-100">
                <div className="col-3" />
                <div className="col-6 text-center">
                    <Logo>TERMO</Logo>
                    <LogoCredit>Infinity</LogoCredit>
                </div>
                <div className="col-3 text-right">
                    <ButtonLink type="button" onClick={() => setShowHelp(true)}>
                        Como jogar?
                    </ButtonLink>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
