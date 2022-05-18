import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {QRCodeSVG} from 'qrcode.react'
import {omit} from 'ramda'

/**
 * Wrapped from [qrcode.react](https://github.com/zpao/qrcode.react).
 *
 */
export default class DashQRCodeSVG extends Component {
    static defaultProps = {}

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
         * The value of the QR code.
         */
        value: PropTypes.string,

        /**
         * size
         */
        size: PropTypes.number,

        /**
         * Background color. "#FFFFFF"
         */
        bgColor: PropTypes.string,

        /**
         * Foreground color. "#000000"
         */
        fgColor: PropTypes.string,

        /**
         * ('L' 'M' 'Q' 'H')
         */
        level: PropTypes.string,

        /**
         * Whether to include margins.
         */
        includeMargin: PropTypes.bool,

        /**
         * Settings for pictures inserted in the QR code.
         */
        imageSettings: PropTypes.shape({
            /**
             * The src of the image tag.
             */
            src: PropTypes.string,

            /**
             * none, will center
             */
            x: PropTypes.number,

            /**
             * none, will center
             */
            y: PropTypes.number,

            /**
             * height of the img
             */
            height: PropTypes.number,

            /**
             * width of the img
             */
            width: PropTypes.number,

            /**
             * excavate
             */
            excavate: PropTypes.bool,
        }),
    }

    render () {
        const {class_name} = this.props

        return (
            <QRCodeSVG
                {...omit(['setProps', 'class_name'], this.props)}
                className={class_name}
            ></QRCodeSVG>
        )
    }
}
