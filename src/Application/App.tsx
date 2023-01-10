// @ts-nocheck
import MonitorStream from '../Components/Modules/MonitorStream';

import Icons from '../Components/Libraries/Icons';
import Button from '../Components/Modules/Buttons';
import "../index.css";
import setTheme from '../Utils/Methods/setTheme';

// Configuration file
const App = (): JSX.Element => {

    /* [CHANGES] last updated on: 1st of January 2023
     * - Added implementation of an YOLO object detector.
     * - Added Video to Canvas conversion with a screen stream feed.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* [TODO]
     * - Add a way to communicate the data collected to another instance of a nodejs app.
     * - Add a way to detect poses for a object thats labeled "Person".
     * - Performance upgrades for async rendering of data collected by AI models.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    // Combine default styles with user-defined styles

    const bgImage = require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/background.jpg");

    const appImage = [
        require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
        require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
        require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
        require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
        require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
    ];

    const Styles = {
        backgroundImage: bgImage,
    }

    // Combine default classes with user-defined classes
    const Classes = `
        bg-black text-white
        min-h-screen
    `;

    return (
        <div className={Classes} style={Styles}>

            <MonitorStream />

            <div className={"bg-dark min-h-[350px] max-w-[100%] w-[100%] overflow-hidden absolute top-[100vh] block"}>

                <div className={"tw-container tw-column p-5 center"}>

                    <h1 className={"mb-2 uppercase"}>Start using Vision assist now!</h1>
                    <p className={"text-2xl"}>Some slogan here to inspire the elderly.</p>

                    <Button action={() => {
                        console.log("Document Selected with Theme", setTheme("lightmode"));
                    }} title={(
                        <span className={"w-[200px] flex flex-row justify-evenly items-center p leading-[24px] pl-1 pr-3"}><Icons.Theme.Light iconSize={"24"} strokeColor={"currentColor"} strokeWidth={1.5} />Change Theme </span>
                    )} classes={"bg-black text-white rounded-full text-[18px] font-bold uppercase my-3"}/>

                </div>

                <div className={"tw-container tw-column py-5"}>

                    <div className={"tw-row w-[100%] py-5"}>

                        <div className={"tw-column w-[1/2]"}>

                            <h2 className={"mb-2 uppercase text-right"}>This is a left side column</h2>

                            <img className={"text-right w-[300px] h-auto hover:-translate-y-3 hover:shadow-2xl transition-all transform-gpu ease-linear duration-500"} src={appImage[0]} alt={"Alt Context"}/>
                            <p className={"text-right text-xl"}>A lot of text</p>

                        </div>

                        <div className={"tw-column w-[1/2] justify-end items-end"}>

                            <h2 className={"mb-2 uppercase text-left"}>This is a right side column</h2>

                            <img className={"text-left w-[300px] h-auto hover:-translate-y-3 hover:shadow-2xl transition-all transform-gpu ease-linear duration-500"} src={appImage[1]} alt={"Alt Context"} />
                            <p className={"text-left text-xl"}>A lot of text</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default App;