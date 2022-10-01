
import "../../styles/GameWrapper.css";
export function GameWrapper({children}) {
    const classes = [
        "game-wrapper",
        "flex",
        "flex-col",
        "justify-center",
        "items-center"
    ].join(" ")
    return <div className={classes} data-testid={"game-wrapper"}>{children}</div>
}