import { Background, Panel } from './styles';

interface IOverlayProps {
    show?: boolean;
}

const Overlay: React.FC<IOverlayProps> = ({ show = false, children }) => (
    <Background className={show ? 'show' : undefined}>
        <Panel>{children}</Panel>
    </Background>
);

export default Overlay;
