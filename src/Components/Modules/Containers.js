import React from 'react';
import Style from '../Classes/Style';

// HTML Container Component - commonly used in a section on a page
export class Container extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            display: block;
            position: relative;
        `, this.props.styles);

        // Combine default classes with user-defined classes
        const Classes = `
            flex container
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <div class={Classes} style={Styles} children={this.props.children} id={this.props.id} />
            </>
        );
    }
}

// HTML Section Component - used for sections on a page
export class Section extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            display: flex;
            justify-content: center;
            align-items: center;
        `, this.props.styles);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <section className={Classes} style={Styles} children={this.props.children} id={this.props.id} />
            </>
        );
    }
}

// HTML Header Component - used for the header of the page
export class Header extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            display: flex;
            justify-content: center;
            align-items: center;
        `, this.props.styles);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <header className={Classes} style={Styles} children={this.props.children} id={this.props.id} />
            </>
        );
    }
}

// Wrapper Component - Used to wrap components in a divider frame
export class Wrapper extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
        `, this.props.styles);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <div className={Classes} style={Styles} children={this.props.children} id={this.props.id}/>
            </>
        );
    }
}

export default Wrapper;