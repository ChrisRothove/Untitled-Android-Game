import {parseGrowth} from "../../../utils/maths";

export const StatBlock = ({stat, base, value, growth}) => {
    const wrapperClasses = [
        "stat-block",
        "flex",
        "flex-col",
        "w-[90px]",
        "m-1",
        "p-1",
    ].join(" ")

    const bigClasses = [
        "flex",
        "flex-row",
        "w-[100%]",
        "justify-between",
        "items-center",
        "font-extrabold",
        "text-lg",
        "font-title",
        "text-bright"
    ].join(" ")

    const smallClasses = [
        "flex",
        "items-center",
        "justify-center",
        "font-black",
        "text-offset-mid",
        "font-title",
        "text-md",
        "uppercase",
        "bg-bright"
    ].join(" ")

    const starClasses = [
        "flex",
        "items-center",
        "justify-start",
        "font-black",
        "text-bright",
        "text-sm",
        "tracking-tight"
    ].join(" ")

    return (
        <div className={wrapperClasses}>
            <div className={bigClasses}>
                <b>{stat}</b>
                <span>{value}</span>
            </div>
            <div className={smallClasses}>
                <span>base {base}</span>
            </div>
            <div className={starClasses}>
                <span>{parseGrowth(growth)}</span>
            </div>
        </div>
    )
}