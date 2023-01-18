// @ts-nocheck
import { useLayoutEffect, useState } from 'react';
import Icons from '../Components/Libraries/Icons';
import Button from '../Components/Modules/Buttons';
import Wrapper from '../Components/Modules/Containers';
import Grid2D from '../Components/Modules/Grid';
import MonitorStream from '../Components/Modules/MonitorStream';
import "../index.css";
import { getTheme, setTheme } from '../Utils/Methods/Theme';

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
     * - Add react router to make different pages for different apps etc.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    // Combine default styles with user-defined styles

    const bgImage = require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/background.jpg");

    const [menu, setMenu] = useState(false);

    // const appImage = [
    //     require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
    //     require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
    //     require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
    //     require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
    //     require(__dirname.replace("\\", "/") + "./../Assets/Images/backgrounds/placeholder.jpg"),
    // ];

    const Styles = {
        backgroundImage: bgImage,
    }

    // Combine default classes with user-defined classes
    const Classes = `
        bg-dark text-light
        min-h-screen
    `;

    const setMenuState = (state) => setMenu(state);

    useLayoutEffect(() => {
        console.log("Menu state changed =>", menu);
    }, [menu])

    return (
        <div className={Classes} style={Styles}>

            <MonitorStream menuCallback={async () => setMenu(true)} />

            <div className={`bg-base-200 fixed top-0 right-0 h-[100vw] min-h-[100vh] max-h-[100vh] w-[100vw] xs:w-[100vw] sm:w-[100vw] md:w-[360px] lg:w-[360px] xl:w-[360px] z-20 ${menu ? "" : "hidden"}`} id={"menu-root"}>

                <Wrapper classes={"w-[100%] h-[100vh] p-5"}>
                    <h1 className={"my-4 ml-2 w-full"}>Pages <Button classes={"ml-[140px] inline-block z-30 hover:translate-y-[3px] transform-gpu transition-all ease-linear duration-500"} title={<Icons.Actions.Cross iconSize={"32"} />} action={() => setMenuState(false)} /></h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.Symbols.Rocket iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.Symbols.Pencil iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white rounded-full bg-primary dark:bg-secondary dark:text-base-100">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.User.Group iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Forums</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white rounded-full bg-primary dark:bg-secondary dark:text-base-100">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.Symbols.America iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Partners</span>
                            </a>
                        </li>
                        <li>
                            <hr className={"border-current"} />
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.User.Normal iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.Actions.Login iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.Actions.Plus iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                        <li>
                            <hr className={"border-current"} />
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.User.Normal iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-base-100">
                                <Icons.IoT.CPU iconSize={32} strokeColor={"currentColor"} />
                                <span className="flex-1 ml-3 whitespace-normal">Buy a coffee ❤️🤟</span>
                                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm italic font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-blue-700 dark:text-white">Paypal</span>
                            </a>
                        </li>
                    </ul>

                </Wrapper>

            </div>

            <div className={"bg-dark min-h-[350px] max-w-[100%] w-[100%] overflow-hidden absolute top-[100vh] block"}>

                <div className={"tw-container tw-column py-12 text-center"}>

                    <h1 className={"mb-2 uppercase text-[64px]"}>Start using Vision assist now!</h1>
                    <p className={"text-2xl"}>Some slogan here to inspire the elderly.</p>

                    <Button action={() => {
                        console.log("Document Selected with Theme", getTheme() === "darkmode" ? setTheme("lightmode") && getTheme() : setTheme("darkmode") && getTheme());
                    }} title={(
                        <span className={"w-[200px] flex flex-row justify-evenly items-center p leading-[24px] pl-1 pr-3"}><Icons.Theme.Light iconSize={"24"} strokeColor={"currentColor"} strokeWidth={1.5} />Change Theme </span>
                    )} classes={"bg-base-200 rounded-full text-[18px] font-bold uppercase my-3 hover:bg-base-300 transform-gpu transition-all duration-300"}/>

                </div>

                <Grid2D cols={3}>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        1
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        2
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        3
                    </div>

                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        4
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        5
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        6
                    </div>

                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        7
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        8
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        9
                    </div>

                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        10
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        11
                    </div>
                    <div className={"w-full min-h-[150px] rounded-lg bg-base-200 p-3"}>
                        12
                    </div>
                </Grid2D>

            </div>
        </div>
    )
}

export default App;