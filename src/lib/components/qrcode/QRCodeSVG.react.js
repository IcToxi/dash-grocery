import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCodeSVG from 'qrcode.react';
import { omit } from "ramda";

/**
 * Wrapped from [qrcode.react](https://github.com/zpao/qrcode.react).
 *
 */
export default class DashQRCodeSVG extends Component {

    static defaultProps = {};

    static propTypes = {
        /**
         * The ID used to identify this component in Dash callbacks.
         */
        id: PropTypes.string,

        /**
        * Often used with CSS to style elements with common properties
        */
        class_name: PropTypes.string,

        /** */
        value: PropTypes.string,

        /** */
        size: PropTypes.number,

        /**
        * "#FFFFFF" 
        */
        bgColor: PropTypes.string,

        /**
        * "#000000" 
        */
        fgColor: PropTypes.string,

        /**
         * ('L' 'M' 'Q' 'H')
         */
        level: PropTypes.string,

        /** */
        includeMargin: PropTypes.bool,

        /** */
        imageSettings: PropTypes.shape({
            /** */
            src: PropTypes.string,

            /**
             * none, will center
             */
            x: PropTypes.number,

            /**
             * none, will center
             */
            y: PropTypes.number,

            /** */
            height: PropTypes.number,

            /** */
            width: PropTypes.number,

            /** */
            excavate: PropTypes.bool
        })

    };

    render() {
        const { class_name } = this.props;

        return (
            <QRCodeSVG
                {...omit(["setProps", "class_name"], this.props)}
                className={class_name}
            >
            </QRCodeSVG >
        );
    }
}



