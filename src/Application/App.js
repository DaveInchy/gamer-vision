import React from 'react';

import Style from '../Components/Classes/Style.js';
import Divider, { Container, Header, Section } from '../Components/Modules/Containers.js';
import Navbar from '../Components/Navbar.js';
import MonitorStream from '../Components/MonitorStream.js';

// Configuration file
import Config from './Config.js';
export default class App extends React.Component {

    /* [CHANGES] last updated on: 1st of January 2023
     * - Added implementation of an YOLO object detector.
     * - Added Video to Canvas conversion with a screen stream feed.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* [TODO]
     * - Add a way to communicate the data collected to another instance of a nodejs app.
     * - Add a way to detect poses for a object thats labeled "Person".
     * - Performance upgrades for async rendering of data collected by AI models.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    render() {

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
            <Divider classes={Classes} styles={Styles}>

                <MonitorStream />

            </Divider>
        );
    }
}