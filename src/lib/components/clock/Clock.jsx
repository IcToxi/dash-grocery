import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Clock from 'react-live-clock'
import {omit} from 'ramda'

/**
 * Wrapped from [react-live-clock](https://github.com/pvoznyuk/react-live-clock).
 *
 */
export default class DashClock extends Component {
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
         * date can be set as a children prop.
         */
        children: PropTypes.node,

        /**
         * Date to output, If nothing is set then it take current date.
         */
        date: PropTypes.oneOfType([PropTypes.string, PropTypes.date]),

        /**
         * Formatting from moment.js library.
         */
        format: PropTypes.string,

        /**
         * Changes the language of the component via prop
         */
        locale: PropTypes.string,

        /**
         * Filtering the value before the output .
         */
        filter: PropTypes.func,

        /**
         * If timezone is set, the date is show in this timezone.
         * You can find the list. here, the TZ column.
         */
        timezone: PropTypes.string,

        /**
         * If you want the clock to be auto-updated every interval seconds.
         */
        ticking: PropTypes.bool,

        /**
         * Auto-updating period for the clock. 1 second is a default value.
         */
        interval: PropTypes.number,

        /**
         * callback function on each output update
         */
        onChange: PropTypes.func,
    }

    render () {
        const {class_name, children} = this.props

        return (
            <Clock {...omit(['class_name'], this.props)} className={class_name}>
                {children}
            </Clock>
        )
    }
}
