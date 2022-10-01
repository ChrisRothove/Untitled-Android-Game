
import "../../styles/GameWrapper.css";
export function GameWrapper({children}) {
    return <div className="game-wrapper" data-testid={"game-wrapper"}>{children}</div>
}