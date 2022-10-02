import {useState} from "react";
import "../../styles/TextEntry.css"

export default function TextEntry({name, type}) {
    const [input, setInput] = useState("")
    return (
        <div className={"text-entry"}>
            <input type={type}
                   name={name}
                   value={input}
                   placeholder={name}
                   onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}