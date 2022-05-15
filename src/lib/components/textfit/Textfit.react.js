import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';
import { omit } from "ramda";

/**
 * Wrapped from [react-textfit](https://github.com/malte-wessel/react-textfit).
 *
 */
export default class DashTextfit extends Component {

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

        /**
         * 
         */
        children: PropTypes.node,

        /**
         * (single|multi) Algorithm to fit the text. Use single for headlines and multi for paragraphs.
         * Default is multi.
         */
        mode: PropTypes.string,

        /**
         * (Boolean) When mode is single and forceSingleModeWidth is true, the element's height will be ignored. 
         * Default is true.
         */
        forceSingleModeWidth: PropTypes.bool,

        /**
         * (Number) Minimum font size in pixel. Default is 1.
         */
        min: PropTypes.number,

        /**
         * (Number) Maximum font size in pixel. Default is 100.
         */
        max: PropTypes.number,

        /**
         * (Number) Window resize throttle in milliseconds. Default is 50.
         */
        throttle: PropTypes.number,

        /**
         * (Function) Will be called when text is fitted.
         */
        onReady: PropTypes.func
    };

    render() {
        const { class_name, children } = this.props;

        return (
            <Textfit
                {...omit(["class_name", "children"], this.props)}
                className={class_name}
            >{children}
            </Textfit>
        );
    }
}



