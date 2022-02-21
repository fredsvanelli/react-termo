import { useCallback, useEffect, useMemo } from 'react';
import slugify from 'slugify';

import { useGame } from '../../hooks/Game';
import { KeyCap, KeyRow } from './styles';

import {
    specialKeys,
    keys,
    allowedKeyboardKeys,
} from '../../constants/keyboard';

interface IKeyProps {
    char: string;
}

const Key: React.FC<IKeyProps> = ({ char }) => {
    const { inputChar, keyMap } = useGame();

    const className = useMemo(() => {
        if (keyMap?.correct?.includes(char.toUpperCase())) return 'correct';
        if (keyMap?.wrongPosition?.includes(char.toUpperCase()))
            return 'wrong-position';
        if (keyMap?.wrong?.includes(char.toUpperCase())) return 'wrong';
        return undefined;
    }, [char, keyMap]);

    return (
        <KeyCap
            type="button"
            className={className}
            onClick={() => inputChar(char)}
        >
            {char.toUpperCase()}
        </KeyCap>
    );
};

const DeleteKey: React.FC = () => {
    const { inputChar } = useGame();
    return (
        <KeyCap
            className="key-delete"
            type="button"
            onClick={() => inputChar(null)}
        >
            Del
        </KeyCap>
    );
};

const EnterKey: React.FC = () => {
    const { confirmRow } = useGame();
    return (
        <KeyCap
            className="key-enter"
            type="button"
            onClick={() => confirmRow()}
        >
            Enter
        </KeyCap>
    );
};

const Keyboard: React.FC = () => {
    const { inputChar, confirmRow, activeCell, setActiveCell } = useGame();

    const captureKeyboard = useCallback(
        (e: KeyboardEvent): void => {
            const pressedKey = slugify(e.key).toUpperCase();

            if (allowedKeyboardKeys.includes(pressedKey)) {
                if (pressedKey === specialKeys.arrowLeft) {
                    if (activeCell > 0) setActiveCell(prev => prev - 1);
                    return;
                }

                if (pressedKey === specialKeys.arrowRight) {
                    if (activeCell < 4) setActiveCell(prev => prev + 1);
                    return;
                }

                if (pressedKey === specialKeys.enter) {
                    confirmRow();
                    return;
                }

                if (
                    [specialKeys.backspace, specialKeys.delete].includes(
                        pressedKey
                    )
                ) {
                    inputChar(null);
                    return;
                }

                inputChar(pressedKey);
            }
        },
        [activeCell, confirmRow, inputChar, setActiveCell]
    );

    useEffect(() => {
        document.addEventListener('keyup', captureKeyboard, false);

        return () =>
            document.removeEventListener('keyup', captureKeyboard, false);
    });

    return (
        <div>
            <KeyRow>
                {keys[0].map(key => (
                    <Key key={key} char={key} />
                ))}
            </KeyRow>
            <KeyRow>
                {keys[1].map(key =>
                    key === specialKeys.delete ? (
                        <DeleteKey key={key} />
                    ) : (
                        <Key key={key} char={key} />
                    )
                )}
            </KeyRow>
            <KeyRow>
                {keys[2].map(key =>
                    key === specialKeys.enter ? (
                        <EnterKey key={key} />
                    ) : (
                        <Key key={key} char={key} />
                    )
                )}
            </KeyRow>
        </div>
    );
};

export default Keyboard;
