/* eslint-disable react/no-array-index-key */
import { useCallback } from 'react';
import slugify from 'slugify';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HelpOverlay from '../../components/HelpOverlay';
import Main from '../../components/Main';
import WinOverlay from '../../components/WinOverlay';
import { useGame } from '../../hooks/Game';
import { Cell, Row, RowsContainer, Wrapper } from './styles';

const Game: React.FC = () => {
    const {
        word,
        rows,
        activeRow,
        activeCell,
        isInvalid,
        won,
        isFinished,
        showHelp,
        setActiveCell,
    } = useGame();

    const checkCellScoreClass = useCallback(
        (row, col) => {
            const cellChar = rows[row][col];
            const userWord = rows[row];

            const compare = Array.from(slugify(word).toUpperCase());

            let scoreClass = '';

            const filteredCompare = compare.map((char, i) =>
                userWord[i] === char ? null : char
            );

            if (compare[col] === cellChar) {
                scoreClass = ' correct';
            } else if (filteredCompare.includes(cellChar ?? '')) {
                scoreClass = ' wrong-position';
            } else {
                scoreClass = ' wrong';
            }

            return scoreClass;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [rows, word]
    );

    const getCellClassName = useCallback(
        (row, col) => {
            let className = 'cell';
            if (row === activeRow && col === activeCell && !isFinished) {
                className += ' active';
            }

            if (activeRow > row) {
                className += checkCellScoreClass(row, col);
            }

            return className;
        },
        [activeCell, activeRow, checkCellScoreClass, isFinished]
    );

    return (
        <Wrapper>
            <Header />
            <Main>
                <RowsContainer>
                    {isInvalid && (
                        <p className="text-center text-red">Palavra inválida</p>
                    )}
                    {rows.map((row, index) => (
                        <Row
                            className={`${
                                activeRow === index && !isFinished
                                    ? 'active'
                                    : ''
                            }${activeRow > index ? 'confirmed' : ''}`}
                            key={index}
                        >
                            {row.map((cell, i) => (
                                <Cell
                                    type="button"
                                    className={getCellClassName(index, i)}
                                    id={`col-${i}`}
                                    key={`${index}${i}`}
                                    onClick={() =>
                                        activeRow === index && !isFinished
                                            ? setActiveCell(i)
                                            : null
                                    }
                                >
                                    <span>{cell}</span>
                                </Cell>
                            ))}
                        </Row>
                    ))}
                </RowsContainer>
            </Main>
            <Footer />
            <WinOverlay show={isFinished} won={won} />
            <HelpOverlay show={showHelp} />
        </Wrapper>
    );
};

export default Game;
