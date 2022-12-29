import React from 'react';

import Style from '../Components/Classes/Style.js';
import Divider, { Container, Section } from '../Components/Modules/Containers.js';

export default class App extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            font-weight: bold;
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            bg-dark text-light
            min-h-screen
            ${this.props.class ? this.props.class.toString() : ""}
        `;

        return (
            <Divider class={Classes} style={Styles}>

                <Section class={''}>
                    <Container>
                        <h1 class={'text-center'}>Hello, World!</h1>
                    </Container>
                </Section>

            </Divider>
        );
    }
}