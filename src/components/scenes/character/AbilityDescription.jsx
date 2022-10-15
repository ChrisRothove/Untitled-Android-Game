import {useState} from "react";

export default function AbilityDescription({type, ability}) {
    const [open, setOpen] = useState(false);

    const wrapperClasses = [
        "w-[100%]",
        "p-1",
        "flex",
        "flex-row",
        "justify-between",
        "items-center"
    ].join(" ")

    const typeBox = [
        "stat-block",
        "flex",
        "flex-col",
        "w-[90px]",
        "p-1",
        "items-center",
        "justify-center",
        "h-[90px]"
    ].join(" ")

    const typeSpan = [
        "flex",
        "items-center",
        "justify-center",
        "font-black",
        "text-offset-mid",
        "font-title",
        "text-md",
        "uppercase",
        "bg-bright",
        "w-[100%]",
    ].join(" ")

    const descBox = [
        "stat-block",
        "flex",
        "flex-col",
        "w-[260px]",
        "p-1",
        "items-center",
        "justify-center",
        "h-[90px]",
        "text-bright",
        "text-left"
    ].join(" ")

    return (
        <div className={wrapperClasses}>
            <div className={typeBox} onClick={() => setOpen(!open)}>
                <div className={typeSpan}>
                    {type}
                </div>
            </div>
            {open ? <div className={descBox}>
                <b>{ability?.name}</b>
                <span>{ability?.desc}</span>
            </div> : null}
        </div>
    )
}