import "../../styles/PixelButton.css"

export default function PixelButton({text, type, callback}) {
    return <button className={"pixel-button"} type={type} onClick={callback}>{text}</button>
}