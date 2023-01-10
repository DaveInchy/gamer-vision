import React from 'react';
import StyleSheet from '../../Utils/Classes/Style';

export default class Button extends React.Component {

    title = "A Button";
    action;
    styles;
    classes;
    disabled;

    constructor(
        props: any
    ) {
        super(props);

        const { action, title, style, classes, disabled } = props;

        this.action = action;
        this.title = title;
        this.styles = style;
        this.classes = classes;
        this.disabled = disabled;
        return this;
    }

    render() {

        const Styles = new StyleSheet(``, this.styles || {});

        // Combine default classes with user-defined classes
        const Classes = `
            px-4 py-2
            ${this.disabled ? "disabled text-stone-600 text-gray-600" : "active"}
            ${this.classes ? this.classes.toString() + " " : " "}
        `;

        return (
            <button disabled={this.disabled || false} className={Classes || ""}
            // @ts-ignore
            style={Styles} onClick={this.action}>
                {this.title || "Button"}
            </button>
        );
    }
}