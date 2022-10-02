import {CREATOR_SLUG} from "../../constants";
import "../../styles/SplashScreen.css"

export default function SplashScene() {
    const mainStyles = [
        "splash-screen",
        "splash-screen-fade",
        //font
        "font-title",
        //size
        "w-full",
        "h-full",
        //colors
        "bg-dark/60",
        "text-bright",
        //flex styles
        "flex",
        "flex-col",
        "justify-center",
        "items-center"
    ].join(" ")
    //styles for the slug
    const slugClasses = [
        "text-3xl",
        "tracking-widest",
    ].join(" ")
    return (
        <div data-testid="splash-screen"
             className={mainStyles}>
            <span className={slugClasses}>{CREATOR_SLUG}<span className={"underscore"}>_</span></span>
        </div>)
}