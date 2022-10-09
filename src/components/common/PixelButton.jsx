import "../../styles/PixelButton.css"

export default function PixelButton({text, type, callback}) {
    return <button className={"pixel-button font-title"} type={type} onClick={callback}>{text}</button>
}