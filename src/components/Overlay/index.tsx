import { Background, CloseButton, Panel, PanelContent } from './styles';

interface IOverlayProps {
    show?: boolean;
    onClickCloseButton?: () => void;
}

const Overlay: React.FC<IOverlayProps> = ({
    show = false,
    onClickCloseButton,
    children,
}) => (
    <Background className={show ? 'show' : undefined}>
        <Panel>
            <PanelContent>{children}</PanelContent>
            {onClickCloseButton && (
                <CloseButton type="button" onClick={onClickCloseButton} />
            )}
        </Panel>
    </Background>
);

export default Overlay;
