import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactStars from 'react-stars'
import {omit} from 'ramda'

/**
 * Wrapped from [react-stars](https://github.com/n49/react-stars).
 *
 */
export default class DashReactStars extends Component {
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
         * Set rating value.
         */
        value: PropTypes.number,

        /**
         * How many total stars you want
         */
        count: PropTypes.number,

        /**
         * Which character you want to use as a star.
         */
        char: PropTypes.string,

        /**
         * Color of inactive star (this supports any CSS valid value)
         */
        color1: PropTypes.string,

        /**
         * Color of selected or active star
         */
        color2: PropTypes.string,

        /**
         * Size of stars (in px)
         */
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * Should you be able to select rating or just see rating (for reusability)
         */
        edit: PropTypes.bool,

        /**
         * Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars
         */
        half: PropTypes.bool,

        /**
         * Will be invoked any time the rating is changed
         */
        onChange: PropTypes.func,
    }

    render () {
        const {class_name} = this.props

        return (
            <ReactStars
                {...omit(['setProps', 'class_name'], this.props)}
                className={class_name}
            ></ReactStars>
        )
    }
}
