import React from 'react';

import Style from '../Components/Classes/Style.js';
import Divider, { Container, Section } from '../Components/Modules/Containers.js';
import Stream from '../Components/Stream.js';

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
            bg-dark text-light
            min-h-screen
        `;

        return (
            <Divider class={Classes} style={Styles}>
                <Section class={``}>
                    {/* Add a header/navbar to switch app pages */}
                </Section>

                {/*
                <Section class={''}>
                    <Container>
                        <h1 className={'text-center font-sans'}>AI vision for Gamers or Bots</h1>
                    </Container>
                </Section>
                */}

                <Stream onSuccess={async ({ canvasElement, videoElement, mediaStream }) => {
                    return true ? false : true;
                }}/>

            </Divider>
        );
    }
}