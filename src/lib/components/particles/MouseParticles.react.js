import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import MouseParticles from 'react-mouse-particles'
import { omit } from "ramda";

/**
 * Wrapped from [react-mouse-particles](https://github.com/lindelof/react-mouse-particles).
 * 
 */
export default class DashMouseParticles extends Component {

    static defaultProps = {
        g: 1,
        num: 3,
        radius: 10,
        alpha: .1,
        tha: 20,
        v: .5,
        life: 1.2,
        color: 'random',
        level: 6,
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
         * Whether to add gravity
         */
        g: PropTypes.number,

        /**
        * The number of particles emitted each time
        */
        num: PropTypes.number,

        /**
        * The radius of every particle
        */
        radius: PropTypes.number,

        /**
        * The alpha of every particle
        */
        alpha: PropTypes.number,

        /**
        * The Particle emitter angle
        */
        tha: PropTypes.number,

        /**
        * The Particle emitter Particle velocity
        */
        v: PropTypes.number,

        /**
        * The life of every particle
        */
        life: PropTypes.number,

        /**
        * Particle color
        */
        color: oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

        /**
        * Eliminate dom's className without triggering animation
        */
        cull: PropTypes.string,

        /**
        * Detect levels of culling animation
        */
        level: PropTypes.number
    };

    render() {
        const { class_name } = this.props;

        return (
            <>
                <MouseParticles
                    {...omit(["setProps", "class_name"], this.props)}
                    className={class_name}
                />
            </>
        );
    }
}



