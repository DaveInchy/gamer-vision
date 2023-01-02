import React from 'react';
import Style from '../Classes/Style';

export default class Button extends React.Component {

    title = "A Button";


    constructor(
        props
    ) {
        super(props);

        this.props = props;
        const { action, title, style, classes } = this.props;

        this.action = action;
        this.title = title;
        this.styles = style;
        this.classes = classes;
        return this;
    }

    render() {

        const Styles = new Style(`
            font-size: 26px;
        `, this.styles);

        // Combine default classes with user-defined classes
        const Classes = `
            px-4 py-2
            ${this.classes ? this.classes.toString() + " " : " "}
        `;

        return (
            <button className={Classes} style={Styles} onClick={this.action}>
                {this.title.toString()}
            </button>
        );
    }
}