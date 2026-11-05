import React, {useEffect, useRef} from 'react'
import PropTypes, {oneOfType} from 'prop-types'
import {Burst, runLoop} from '../../utils/particleEngine'

/**
 * Particles that burst from the mouse pointer while it moves.
 */
const DashMouseParticles = ({
    id,
    class_name,
    g = 1,
    num = 3,
    radius = 10,
    alpha = 0.1,
    tha = 20,
    v = 0.5,
    life = 1.2,
    color = 'random',
}) => {
    const canvasRef = useRef(null)
    const optionsRef = useRef({})
    optionsRef.current = {g, num, radius, alpha, tha, v, life, color}

    useEffect(() => {
        const canvas = canvasRef.current
        const burst = new Burst()
        const stop = runLoop(canvas, (ctx, dt, w, h) =>
            burst.draw(ctx, dt, w, h)
        )
        const onMove = event => {
            burst.emit(event.clientX, event.clientY, {
                ...optionsRef.current,
                direction: -90,
            })
        }
        window.addEventListener('mousemove', onMove, {passive: true})
        return () => {
            window.removeEventListener('mousemove', onMove)
            stop()
        }
    }, [])

    return (
        <canvas
            id={id}
            className={class_name}
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    )
}

DashMouseParticles.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Gravity applied to particles
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
     * The particle emitter angle spread (degrees)
     */
    tha: PropTypes.number,

    /**
     * The particle velocity
     */
    v: PropTypes.number,

    /**
     * The life of every particle in seconds
     */
    life: PropTypes.number,

    /**
     * Particle color: a CSS color, a list of colors, or "random"
     */
    color: oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
}

export default DashMouseParticles
