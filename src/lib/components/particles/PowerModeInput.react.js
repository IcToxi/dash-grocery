import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import PowerModeInput from "power-mode-input";
import { omit } from "ramda";
import { createRef } from 'react/cjs/react.production.min';


/**
 * Wrapped from [power-mode-input](https://github.com/lindelof/power-mode-input).
 * 
 */
export default class DashPowerModeInput extends Component {

    static defaultProps = {
        type: 'text',
        maxLength: 128,
        config: {
            height: 5,
            tha: [0, 360],
            g: 0.5,
            num: 5,
            radius: 6,
            circle: true,
            alpha: [0.75, 0.1],
            color: "random"
        }
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
        type: PropTypes.string,

        /**
         * 
         */
        placeholder: PropTypes.string,

        /**
         * 
         */
        value: PropTypes.any,

        /**
         * 
         */
        defaultValue: PropTypes.any,

        /**
         * 
         */
        maxLength: PropTypes.number,

        /**
         * 
         */
        style: PropTypes.object,

        /**
         * You can use type="custom" to achieve a higher degree of freedom for the particle background.
         */
        config: PropTypes.shape({
            height: PropTypes.number,
            num: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            tha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            alpha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            color: oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
            g: PropTypes.number,
            circle: PropTypes.bool
        }),

        /**
         * 
         */
        setProps: PropTypes.func
    };

    inputRef = createRef()

    componentDidMount() {
        PowerModeInput.make(this.inputRef.current, this.props.config);
    }

    render() {
        const { class_name, value, setProps } = this.props;

        return (
            <>
                <input
                    {...omit(["class_name", "value", "config"], this.props)}
                    className={class_name}
                    ref={this.inputRef}
                    value={value}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ value: e.target.value })
                    }
                />
            </>
        );
    }
}



