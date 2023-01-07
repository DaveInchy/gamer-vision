// @ts-nocheck
import React from 'react';
import Style from '../Components/Classes/Style';
import Wrapper from '../Components/Modules/Containers';
import MonitorStream from '../Components/MonitorStream';

// Configuration file
const App = () => {

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
    const Styles = new Style(`
        font-weight: bold;
    `, {});

    // Combine default classes with user-defined classes
    const Classes = `
        bg-black text-white
        min-h-screen
    `;

    return (
        <Wrapper classes={Classes} styles={Styles}>

            <MonitorStream />

        </Wrapper>
    )
}

export default App;