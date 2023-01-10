// @ts-nocheck
import React from 'react';

// @ts-nocheck
//convert a css string with code to a react Stylesheet object
class Style {
    constructor(str, obj = {}) {
        var regex = /([\w-]*)\s*:\s*([^;]*)/g;
        var match,
            properties = {};

        str += " " + this.convProps(obj);

        while ((match = regex.exec(str)))
            properties[match[1]] = match[2].trim();

        this.properties = properties;
        return this.properties;
    }

    toString = () => {
        var str = "";
        for (var prop in this.properties)
            str += `${prop}: ${this.properties[prop]};`;

        return str;
    };

    convProps = (obj) => {
        var str = "";
        for (var prop in obj)
            str += `${prop}: ${obj[prop]};`;

        return str;
    };

    convStr = (str) => {
        var regex = /([\w-]*)\s*:\s*([^;]*)/g;
        var match, properties = {};

        while ((match = regex.exec(str)))
            properties[match[1]] = match[2].trim();

        return properties;
    };
}

// HTML Container Component - commonly used in a section on a page
export class Container extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            display: block;
            position: relative;
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            flex container
            ${this.props.class ? this.props.class.toString() : ""}
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
            min-height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.class ? this.props.class.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <section class={Classes} style={Styles} children={this.props.children} id={this.props.id} />
            </>
        );
    }
}

// HTML Header Component - used for the header of the page
export class Header extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.class ? this.props.class.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <header class={Classes} style={Styles} children={this.props.children} id={this.props.id} />
            </>
        );
    }
}

// Wrapper Component - Used to wrap components in a divider frame
export class Wrapper extends React.Component {
    render() {

        // Combine default styles with user-defined styles
        const Styles = new Style(`
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            ${this.props.class ? this.props.class.toString() : ""}
        `;

        // Return the component
        return (
            <>
                <div class={Classes} style={Styles} children={this.props.children} id={this.props.id} />
            </>
        );
    }
}

export default class Grid2D extends React.Component {
    render() {

        const MaxWidth = 12;
        const ColCount = this.props.cols ? this.props.cols : 1;
        const ColWidth = Math.floor(MaxWidth / ColCount);

        let RowCount = 0;
        let Rows = [];

        this.props.children.length && this.props.children.length > 0 ? this.props.children.forEach((Item, Index) => {

            let Col = <Wrapper id={"c_" + Index} class={"col-xs-12 col-lg-" + ColWidth + " px-3 my-3"}>{Item}</Wrapper>

            if (Index % ColCount === 0) {
                RowCount++;
                Rows[RowCount] = [];
            }

            Rows[RowCount].push(Col);
        }) : this.props.children ? Rows[0] = [<Wrapper id={"c_0"} class={"col-xs-12 col-lg-" + ColWidth + " px-3 my-3"}>{this.props.children}</Wrapper>] : Rows[0] = [];

        // Combine default styles with user-defined styles
        const Styles = new Style(`
        `, this.props.style);

        // Combine default classes with user-defined classes
        const Classes = `
            py-10
            ${this.props.class ? this.props.class.toString() : ""}
        `;

        return (
            <>
                <Wrapper class={Classes} style={Styles}>
                    {Rows.map((Row, Index) => {
                        return (
                            <Wrapper class="row justify-center" key={Index}>
                                {Row.map((Col, Index) => {
                                    return Col;
                                })}
                            </Wrapper>
                        );
                    })}
                </Wrapper>
            </>
        );
    }
}