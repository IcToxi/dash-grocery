import React, {Component} from 'react'
import PropTypes, {oneOfType} from 'prop-types'
import ParticlesBg from 'particles-bg'
import {omit} from 'ramda'

/**
 * Wrapped from [particles-bg](https://github.com/lindelof/particles-bg).
 *
 */
export default class DashParticlesBg extends Component {
    static defaultProps = {
        color: 'random',
        type: 'random',
        bg: true,
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
         * The type of particle animation.
         * "color", "ball", "lines", "thick", "circle", "cobweb" ,"polygon", "square", "tadpole", "fountain", "random", "custom"
         */
        type: PropTypes.string,

        /**
         * The number of particles emitted each time, generally not set
         */
        num: PropTypes.number,

        /**
         * The background color or particle color of the particle scene
         */
        color: oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),

        /**
         * Eliminate dom's className without triggering animation
         */
        bg: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object,
            PropTypes.string,
        ]),

        /**
         * You can use type="custom" to achieve a higher degree of freedom for the particle background.
         */
        config: PropTypes.shape({
            num: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            rps: PropTypes.number,
            radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            life: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            v: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            tha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            body: PropTypes.string,
            rotate: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            alpha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            scale: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            position: PropTypes.string,
            color: oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]),
            cross: PropTypes.string,
            random: oneOfType([PropTypes.number, PropTypes.bool]),
            g: PropTypes.number,
            f: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
            func: PropTypes.func,
        }),
    }

    render () {
        const {class_name} = this.props

        return (
            <>
                <ParticlesBg
                    {...omit(['setProps', 'class_name'], this.props)}
                    className={class_name}
                />
            </>
        )
    }
}
