import { GameProvider } from './hooks/Game';
import Game from './pages/Game';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
    <GameProvider>
        <Game />
        <GlobalStyles />
    </GameProvider>
);

export default App;
