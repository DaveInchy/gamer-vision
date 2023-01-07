import React from 'react';
import Style from '../Classes/Style';

// HTML Container Component - commonly used in a section on a page
export class Container extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            ${this.props.styles === typeof Style?this.props.styles.toString():this.props.styles}
        `);

        // Combine default classes with user-defined classes
        const Classes = `
            container overflow-hidden
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        // @ts-ignore
        return (<div className={Classes} style={Styles} children={this.props.children} id={this.props.id} />);
    }
}

// HTML Section Component - used for sections on a page
export class Section extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            ${this.props.styles === typeof Style?this.props.styles.toString():this.props.styles}
        `,);

        // Combine default classes with user-defined classes
        const Classes = `
            flex flex-1 justify-center items-center overflow-hidden
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        // @ts-ignore
        return (<section className={Classes} style={Styles} children={this.props.children} id={this.props.id} />);
    }
}

// HTML Header Component - used for the header of the page
export class Header extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            ${this.props.styles === typeof Style?this.props.styles.toString():this.props.styles}
        `,);

        // Combine default classes with user-defined classes
        const Classes = `
            flex flex-1 justify-center items-center min-h-[80vh] w-full overflow-hidden
            ${this.props.classes ? this.props.classes.toString() : ""}
        `;

        // Return the component
        // @ts-ignore
        return (<header className={Classes} style={Styles} children={this.props.children} id={this.props.id} />);
    }
}

// Wrapper Component - Used to wrap components in a divider frame
export class Wrapper extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            ${this.props.styles === typeof Style?this.props.styles.toString():this.props.styles}
        `);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.classes ? this.props.classes.toString() : ""} overflow-hidden
        `;

        // Return the component
        // @ts-ignore
        return (<div className={Classes} style={Styles} children={this.props.children} id={this.props.id}/>);
    }
}

export default Wrapper;