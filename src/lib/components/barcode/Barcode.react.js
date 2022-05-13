import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barcode from 'react-barcode';
import { omit } from "ramda";

/**
 * Wrapped from [react-barcode](https://github.com/kciter/react-barcode).
 * 
 */
export default class DashBarcode extends Component {

    static defaultProps = {
        width: 2,
        height: 100,
        format: "CODE128",
        displayValue: true,
        fontOptions: "",
        font: "monospace",
        textAlign: "center",
        textPosition: "bottom",
        textMargin: 2,
        fontSize: 20,
        background: "#ffffff",
        lineColor: "#000000",
        margin: 10
    };

    static propTypes = {
        /**
         * The ID used to identify this component in Dash callbacks.
         */
        id: PropTypes.string,

        /**
        * Often used with CSS to style elements with common properties
        */
        class_name: PropTypes.string,

        /**
         * 
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The width option is the width of a single bar.
         */
        width: PropTypes.number,

        /**
         * The height of the barcode.
         */
        height: PropTypes.number,

        /**
         * Select which barcode type to use. 
         * Please check the wikipage of the different barcode types for more information.
         */
        format: PropTypes.string,

        /** */
        displayValue: PropTypes.bool,

        /**
         * Overide the text that is diplayed
         */
        text: PropTypes.string,

        /**
         * With fontOptions you can add bold or italic text to the barcode.
         */
        fontOptions: PropTypes.string,

        /**
         * Define the font used for the text in the generated barcode.
         * This can be any default font or a font defined by a @font-face rule.
         */
        font: PropTypes.string,

        /**
         * Set the horizontal alignment of the text. Can be left / center / right.
         */
        textAlign: PropTypes.string,

        /**
         * Set the vertical position of the text. Can be bottom / top.
         */
        textPosition: PropTypes.string,

        /**
         * Set the space between the barcode and the text.
         */
        textMargin: PropTypes.number,

        /**
         * Set the size of the text.
         */
        fontSize: PropTypes.number,

        /**
         * Set the background of the barcode.
         */
        background: PropTypes.string,

        /**
         * Set the color of the bars and the text.
         */
        lineColor: PropTypes.string,

        /**
         * Set the space margin around the barcode. 
         * If nothing else is set, all side will inherit the margins property but can be replaced if you want to set them separably.
         */
        margin: PropTypes.number,

        /** */
        marginTop: PropTypes.number,

        /** */
        marginBottom: PropTypes.number,

        /** */
        marginLeft: PropTypes.number,

        /** */
        marginRight: PropTypes.number,

        /**
         * Only for EAN8/EAN13
         */
        flat: PropTypes.string
    };

    render() {
        const { class_name } = this.props;

        return (
            <Barcode
                {...omit(["setProps", "class_name"], this.props)}
                className={class_name}
            />
        );
    }
}



