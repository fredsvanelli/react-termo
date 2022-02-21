import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
    useEffect,
} from 'react';
import slugify from 'slugify';

import words from '../constants/words';

type CellType = string | null;
type RowType = CellType[];

type ScoresType = {
    totalGames: number;
    victories: number;
    winningStreak: number;
    bestWinningStreak: number;
};

type KeyMapType = {
    wrong: string[];
    wrongPosition: string[];
    correct: string[];
};

interface IGameContextProps {
    word: string;
    rows: RowType[];
    activeRow: number;
    activeCell: number;
    isInvalid: boolean;
    keyMap: KeyMapType;
    won: boolean;
    lost: boolean;
    isFinished: boolean;
    totalTries: number;
    scores: ScoresType;
    showHelp: boolean;
    setActiveCell(index: number | ((prev: number) => void)): void;
    setKeyMap(map: KeyMapType | ((prev: KeyMapType) => void)): void;
    inputChar(char: string | null): void;
    confirmRow(): void;
    restart(): void;
    setShowHelp(show: boolean): void;
}

export const GameContext = createContext<IGameContextProps>(
    {} as IGameContextProps
);

export const useGame = (): IGameContextProps => {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error('useGame must be within GameProvider');
    }

    return context;
};

export const GameProvider: React.FC = ({ children }) => {
    const [word, setWord] = useState('');
    const [activeRow, setActiveRow] = useState(0);
    const [activeCell, setActiveCell] = useState(0);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [totalTries, setTotalTries] = useState(0);
    const [rows, setRows] = useState<RowType[]>([]);
    const [keyMap, setKeyMap] = useState<KeyMapType>({} as KeyMapType);
    const [isInvalid, setInvalid] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const [scores, setScores] = useState<ScoresType>({
        totalGames: 0,
        victories: 0,
        winningStreak: 0,
        bestWinningStreak: 0,
    });

    const resetWord = useCallback(
        () => setWord(words[Math.floor(Math.random() * words.length)]),
        []
    );

    const resetRows = useCallback(
        () => setRows(Array.from(Array(6), () => Array(5).fill(null))),
        []
    );

    const resetKeyMap = useCallback(
        () =>
            setKeyMap({
                wrong: [],
                wrongPosition: [],
                correct: [],
            }),
        []
    );

    const saveScores = useCallback(
        (userWon = true) => {
            const newScores = {
                totalGames: scores.totalGames + 1,
                victories: userWon ? scores.victories + 1 : scores.victories,
                winningStreak: userWon ? scores.winningStreak + 1 : 0,
                bestWinningStreak:
                    userWon &&
                    scores.winningStreak + 1 > scores.bestWinningStreak
                        ? scores.winningStreak + 1
                        : scores.bestWinningStreak,
            };

            localStorage.setItem(
                '@termo_infinity:scores',
                JSON.stringify(newScores)
            );
            setScores(newScores);
        },
        [
            scores.bestWinningStreak,
            scores.totalGames,
            scores.victories,
            scores.winningStreak,
        ]
    );

    const loadScores = useCallback(() => {
        setScores(
            JSON.parse(
                localStorage.getItem('@termo_infinity:scores') ??
                    JSON.stringify(scores)
            )
        );
    }, [scores]);

    useEffect(() => {
        resetWord();
        resetRows();
        resetKeyMap();
        loadScores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const inputChar = useCallback(
        char => {
            if (!(won || lost)) {
                const newRows = [...rows];

                setInvalid(false);

                if (char) {
                    newRows[activeRow][activeCell] = char[0].toUpperCase();
                    if (activeCell < 4) setActiveCell(prev => prev + 1);
                } else {
                    if (
                        newRows[activeRow][activeCell] === null &&
                        activeCell > 0
                    ) {
                        setActiveCell(prev => prev - 1);
                        newRows[activeRow][activeCell - 1] = null;
                    }
                    newRows[activeRow][activeCell] = null;
                }

                setRows(newRows);
            }
        },
        [activeCell, activeRow, lost, rows, won]
    );

    const win = useCallback(() => {
        setWon(true);
        setLost(false);
        saveScores();
    }, [saveScores]);

    const lose = useCallback(() => {
        setLost(true);
        setWon(false);
        saveScores(false);
    }, [saveScores]);

    const confirmRow = useCallback(() => {
        if (!(won || lost)) {
            setInvalid(false);
            setTotalTries(activeRow + 1);

            const userWord = slugify(rows[activeRow].join('')).toUpperCase();
            const gameWord = slugify(word).toUpperCase();

            // if (!words.includes(userWord.toLocaleLowerCase())) {
            //     setInvalid(true);
            //     return;
            // }

            if (userWord === gameWord) {
                win();
            } else if (activeRow === 5) {
                lose();
            }

            const userWordArray = Array.from(userWord);
            const wordArray = Array.from(gameWord);

            const newKeyMap = { ...keyMap };

            userWordArray.forEach((char, index) => {
                if (wordArray[index] === char) {
                    if (!keyMap.correct.includes(char)) {
                        newKeyMap.correct.push(char);
                    }
                } else if (wordArray.includes(char)) {
                    if (!keyMap.wrongPosition.includes(char)) {
                        newKeyMap.wrongPosition.push(char);
                    }
                } else if (!keyMap.wrong.includes(char)) {
                    newKeyMap.wrong.push(char);
                }
            });

            if (
                activeRow < 5 &&
                rows[activeRow].filter(cell => cell).length === 5
            ) {
                setKeyMap(newKeyMap);
                setActiveRow(prev => prev + 1);
                setActiveCell(0);
            }
        }
    }, [won, lost, activeRow, rows, word, keyMap, win, lose]);

    const restart = useCallback(() => {
        resetRows();
        resetWord();
        resetKeyMap();
        setActiveRow(0);
        setActiveCell(0);
        setWon(false);
        setLost(false);
        setTotalTries(0);
    }, [resetKeyMap, resetRows, resetWord]);

    const providerValue = useMemo(
        () => ({
            word,
            rows,
            activeRow,
            activeCell,
            isInvalid,
            keyMap,
            won,
            lost,
            isFinished: won || lost,
            totalTries,
            scores,
            showHelp,
            setActiveCell,
            setKeyMap,
            inputChar,
            confirmRow,
            restart,
            setShowHelp,
        }),
        [
            word,
            rows,
            activeRow,
            activeCell,
            isInvalid,
            keyMap,
            won,
            lost,
            totalTries,
            scores,
            showHelp,
            inputChar,
            confirmRow,
            setActiveCell,
            setKeyMap,
            restart,
            setShowHelp,
        ]
    );

    return (
        <GameContext.Provider value={providerValue}>
            {children}
        </GameContext.Provider>
    );
};
