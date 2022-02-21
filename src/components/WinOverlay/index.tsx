import slugify from 'slugify';
import { useGame } from '../../hooks/Game';
import Overlay from '../Overlay';
import { RestartButton, Result, Title } from './styles';

interface IOverlayProps {
    show?: boolean;
    won?: boolean;
}

const WinOverlay: React.FC<IOverlayProps> = ({ show = false, won = false }) => {
    const { word, totalTries, scores, restart } = useGame();
    return (
        <Overlay show={show}>
            <div className="text-center">
                <Title>{won ? 'Parabéns!' : 'Ah não :('}</Title>
                <Result className={won ? 'won' : 'lost'}>
                    {won ? 'Você venceu!' : 'Você perdeu'}
                </Result>
                <div className="row text-center mb-3">
                    <div className="col">
                        <p>Tentativas</p>
                        <p className="color-purple fs-2">{totalTries}</p>
                    </div>
                    <div className="col">
                        <p>A palavra é</p>
                        <p className="color-purple fs-2">
                            <p className="mb-0">{word.toLocaleUpperCase()}</p>
                            <a
                                className="fs-4 text-white fw-200"
                                href={`https://pt.wikwik.org/${slugify(
                                    word.toLocaleLowerCase()
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Significado (?)
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row text-center mb-3">
                    <div className="col-6 col-md-3 mb-2">
                        <p>Jogos</p>
                        <p className="color-purple fs-2">{scores.totalGames}</p>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                        <p>Vitórias</p>
                        <p className="color-purple fs-2">{scores.victories}</p>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                        <p>Sequencia de Vitórias</p>
                        <p className="color-purple fs-2">
                            {scores.winningStreak}
                        </p>
                    </div>
                    <div className="col-6 col-md-3 mb-2">
                        <p>Melhor sequencia</p>
                        <p className="color-purple fs-2">
                            {scores.bestWinningStreak}
                        </p>
                    </div>
                </div>

                <RestartButton
                    className={won ? 'won' : 'lost'}
                    type="button"
                    onClick={() => restart()}
                >
                    {won ? 'Jogar novamente' : 'Tentar novamente'}
                </RestartButton>
            </div>
        </Overlay>
    );
};

export default WinOverlay;
