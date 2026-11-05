import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Particles, ParticlesProvider} from '@tsparticles/react'
import {loadSlim} from '@tsparticles/slim'

const initEngine = async engine => {
    await loadSlim(engine)
}

const DEFAULT_OPTIONS = {
    fullScreen: {enable: false},
    background: {color: {value: 'transparent'}},
    fpsLimit: 60,
    particles: {
        number: {value: 60},
        color: {value: '#888888'},
        links: {enable: true, color: '#888888', distance: 140, opacity: 0.4},
        move: {enable: true, speed: 1.5},
        opacity: {value: 0.6},
        size: {value: {min: 1, max: 4}},
    },
    interactivity: {
        events: {onHover: {enable: true, mode: 'repulse'}},
    },
}

/**
 * Interactive particle canvas powered by
 * [tsParticles](https://github.com/tsparticles/tsparticles) (slim bundle).
 * Pass any tsParticles options object via `options`.
 */
const DashParticles = ({id, class_name, options, style}) => {
    const resolved = useMemo(
        () => options || DEFAULT_OPTIONS,
        [JSON.stringify(options)]
    )

    return (
        <ParticlesProvider init={initEngine}>
            <Particles
                id={id || 'tsparticles'}
                className={class_name}
                style={style}
                options={resolved}
            />
        </ParticlesProvider>
    )
}

DashParticles.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Inline CSS styles for the container element, e.g. a fixed height.
     */
    style: PropTypes.object,

    /**
     * A tsParticles options object (https://particles.js.org/docs/).
     * A subtle linked-dots preset is used when omitted.
     */
    options: PropTypes.object,
}

export default DashParticles
