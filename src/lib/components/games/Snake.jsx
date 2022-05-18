import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Snake from 'snake-game-react'
import {omit} from 'ramda'

/**
 * Wrapped from [react-snake](https://github.com/derrmru/react-snake).
 *
 */
export default class DashSnake extends Component {
    static defaultProps = {
        color1: '#248ec2',
        color2: '#1d355e',
        backgroundColor: '#ebebeb',
    }

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
         * Snake's color.
         */
        color1: PropTypes.string,

        /**
         * Apple's color.
         */
        color2: PropTypes.string,

        /**
         * background.
         */
        backgroundColor: PropTypes.string,
    }

    render () {
        const {class_name, id} = this.props

        return (
            <div className={class_name} id={id}>
                <Snake {...omit(['class_name', 'id'], this.props)} />
            </div>
        )
    }
}
