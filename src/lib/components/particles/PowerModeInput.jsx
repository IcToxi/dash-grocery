import React, {useEffect, useRef} from 'react'
import PropTypes, {oneOfType} from 'prop-types'
import {Burst, runLoop} from '../../utils/particleEngine'

const DEFAULT_CONFIG = {
    height: 5,
    tha: [0, 360],
    g: 0.5,
    num: 5,
    radius: 6,
    circle: true,
    alpha: [0.75, 0.1],
    color: 'random',
}

/** Approximate the caret's viewport position inside a text input. */
const caretPosition = input => {
    const rect = input.getBoundingClientRect()
    const style = getComputedStyle(input)
    const ctx = document.createElement('canvas').getContext('2d')
    ctx.font = style.font || `${style.fontSize} ${style.fontFamily}`
    const caret = input.selectionStart === null ? input.value.length : input.selectionStart
    const text = input.type === 'password' ? '•'.repeat(caret) : input.value.slice(0, caret)
    const x =
        rect.left +
        parseFloat(style.paddingLeft || 0) +
        parseFloat(style.borderLeftWidth || 0) +
        ctx.measureText(text).width -
        input.scrollLeft
    return {x: Math.min(x, rect.right), y: rect.top + rect.height / 2}
}

/**
 * A text input that shoots particles from the caret as you type.
 */
const DashPowerModeInput = ({
    id,
    class_name,
    type = 'text',
    placeholder,
    value = '',
    maxLength = 128,
    style,
    config = DEFAULT_CONFIG,
    setProps,
}) => {
    const inputRef = useRef(null)
    const canvasRef = useRef(null)
    const configRef = useRef(config)
    const burstRef = useRef(new Burst())
    configRef.current = config

    useEffect(() => {
        const burst = burstRef.current
        return runLoop(canvasRef.current, (ctx, dt, w, h) =>
            burst.draw(ctx, dt, w, h)
        )
    }, [])

    const spawn = () => {
        const input = inputRef.current
        if (!input) {
            return
        }
        const {x, y} = caretPosition(input)
        const cfg = {...DEFAULT_CONFIG, ...configRef.current}
        burstRef.current.emit(x, y - cfg.height, {
            ...cfg,
            speedScale: 120,
            life: [0.4, 0.9],
        })
    }

    return (
        <>
            <canvas
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
            <input
                id={id}
                ref={inputRef}
                className={class_name}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                style={style}
                value={value === null ? '' : value}
                onChange={event => {
                    if (setProps) {
                        setProps({value: event.target.value})
                    }
                    requestAnimationFrame(spawn)
                }}
            />
        </>
    )
}

DashPowerModeInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Type of the input tag.
     */
    type: PropTypes.string,

    /**
     * Placeholder of the input tag.
     */
    placeholder: PropTypes.string,

    /**
     * Value of the input tag.
     */
    value: PropTypes.any,

    /**
     * The length limit of the input.
     */
    maxLength: PropTypes.number,

    /**
     * Style of the input tag.
     */
    style: PropTypes.object,

    /**
     * Particle options: height (px above the caret), num, radius, tha
     * (angle range), alpha, color, g (gravity) and circle (round or square).
     */
    config: PropTypes.shape({
        height: PropTypes.number,
        num: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        tha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        alpha: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
        color: oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        g: PropTypes.number,
        circle: PropTypes.bool,
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
}

export default DashPowerModeInput
