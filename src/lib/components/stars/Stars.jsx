import React, {useState} from 'react'
import PropTypes from 'prop-types'

const roundTo = (value, half) =>
    half ? Math.round(value * 2) / 2 : Math.round(value)

/**
 * Star rating input and display, implemented locally (the former react-stars dependency is unmaintained).
 *
 */
const DashReactStars = ({
    id,
    class_name,
    value = 0,
    count = 5,
    char = '★',
    color1 = 'gray',
    color2 = '#ffd700',
    size = 15,
    edit = true,
    half = true,
    setProps,
}) => {
    const [hover, setHover] = useState(null)
    const fontSize = typeof size === 'number' ? `${size}px` : size
    const shown = hover === null ? roundTo(value || 0, half) : hover

    const valueAt = (event, index) => {
        if (!half) {
            return index + 1
        }
        const rect = event.currentTarget.getBoundingClientRect()
        return event.clientX - rect.left > rect.width / 2 ? index + 1 : index + 0.5
    }

    return (
        <div
            id={id}
            className={class_name}
            style={{display: 'inline-flex', cursor: edit ? 'pointer' : 'default'}}
            onMouseLeave={() => setHover(null)}
        >
            {Array.from({length: count}, (_, i) => {
                const fill = Math.min(Math.max(shown - i, 0), 1) * 100
                return (
                    <span
                        key={i}
                        data-index={i}
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            fontSize,
                            lineHeight: 1,
                            color: color1,
                            userSelect: 'none',
                        }}
                        onMouseMove={
                            edit ? e => setHover(valueAt(e, i)) : undefined
                        }
                        onClick={
                            edit
                                ? e => setProps && setProps({value: valueAt(e, i)})
                                : undefined
                        }
                    >
                        {char}
                        <span
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: `${fill}%`,
                                overflow: 'hidden',
                                color: color2,
                                pointerEvents: 'none',
                            }}
                        >
                            {char}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

DashReactStars.propTypes = {
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
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
}

export default DashReactStars
