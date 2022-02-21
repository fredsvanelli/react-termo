import { useGame } from '../../hooks/Game';
import Overlay from '../Overlay';
import { Title, WordContainer } from './styles';

interface IOverlayProps {
    show?: boolean;
}

const HelpOverlay: React.FC<IOverlayProps> = ({ show = false }) => {
    const { setShowHelp } = useGame();

    return (
        <Overlay show={show} onClickCloseButton={() => setShowHelp(false)}>
            <div>
                <Title>Como jogar</Title>
                <p className="mb-3">
                    Descubra a palavra certa em 6 tentativas. Depois de cada
                    tentativa, as peças mostram o quão perto você está da
                    solução
                </p>
                <WordContainer>
                    <ul>
                        <li className="correct">A</li>
                        <li>P</li>
                        <li>I</li>
                        <li className="correct">T</li>
                        <li>O</li>
                    </ul>
                </WordContainer>
                <p className="mb-3">
                    Letras verdes significam que você acertou a letra e a
                    posição
                </p>
                <WordContainer>
                    <ul>
                        <li>B</li>
                        <li className="wrong-position">O</li>
                        <li>L</li>
                        <li>S</li>
                        <li className="wrong-position">A</li>
                    </ul>
                </WordContainer>
                <p className="mb-3">
                    Letras amarelas significam que você acertou a letra, porém
                    errou a posição
                </p>
                <WordContainer>
                    <ul>
                        <li>C</li>
                        <li>A</li>
                        <li>R</li>
                        <li>T</li>
                        <li>A</li>
                    </ul>
                </WordContainer>
                <p className="mb-3">
                    Letras cinzas estão incorretas pois não fazem parte da
                    resposta
                </p>

                <p className="mb-3">
                    Acentos e &quot;Ç&quot; são preenchidos automaticamente e
                    não são considerados nas dicas.
                </p>
                <p>As palavras podem possuir letras repetidas.</p>
            </div>
        </Overlay>
    );
};

export default HelpOverlay;
