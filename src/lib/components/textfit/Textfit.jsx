import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

const FIT_STEPS = 14

/**
 * Scales text so it fills its container. Use mode "single" for headlines and
 * "multi" for paragraphs.
 */
const DashTextfit = ({
    id,
    class_name,
    children,
    style,
    mode = 'multi',
    forceSingleModeWidth = true,
    min = 1,
    max = 100,
    throttle = 50,
}) => {
    const outerRef = useRef(null)
    const innerRef = useRef(null)
    const [fontSize, setFontSize] = useState(null)
    const single = mode === 'single'

    const fit = useCallback(() => {
        const outer = outerRef.current
        const inner = innerRef.current
        if (!outer || !inner) {
            return
        }
        const width = outer.clientWidth
        const height = outer.clientHeight
        if (!width) {
            return
        }
        const fits = size => {
            inner.style.fontSize = `${size}px`
            const overflowX = inner.scrollWidth > width + 0.5
            const overflowY = inner.scrollHeight > height + 0.5
            if (single) {
                return !overflowX && (forceSingleModeWidth || !overflowY)
            }
            return !overflowX && !overflowY
        }
        let lo = min
        let hi = max
        for (let i = 0; i < FIT_STEPS && hi - lo > 0.5; i++) {
            const mid = (lo + hi) / 2
            if (fits(mid)) {
                lo = mid
            } else {
                hi = mid
            }
        }
        const best = Math.floor(lo)
        inner.style.fontSize = ''
        setFontSize(best)
    }, [single, forceSingleModeWidth, min, max])

    useLayoutEffect(() => {
        fit()
    }, [fit, children])

    useEffect(() => {
        const outer = outerRef.current
        if (!outer || typeof ResizeObserver === 'undefined') {
            return undefined
        }
        let timer = null
        const observer = new ResizeObserver(() => {
            clearTimeout(timer)
            timer = setTimeout(fit, throttle)
        })
        observer.observe(outer)
        return () => {
            clearTimeout(timer)
            observer.disconnect()
        }
    }, [fit, throttle])

    return (
        <div
            id={id}
            className={class_name}
            ref={outerRef}
            style={{...style, fontSize: fontSize ? `${fontSize}px` : undefined}}
        >
            <div
                ref={innerRef}
                style={{
                    display: single ? 'inline-block' : 'block',
                    whiteSpace: single ? 'nowrap' : 'normal',
                    fontSize: fontSize ? `${fontSize}px` : `${max}px`,
                    visibility: fontSize ? 'visible' : 'hidden',
                }}
            >
                {children}
            </div>
        </div>
    )
}

DashTextfit.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Inline CSS styles for the container, e.g. a fixed height.
     */
    style: PropTypes.object,

    /**
     * children
     */
    children: PropTypes.node,

    /**
     * (single|multi) Algorithm to fit the text. Use single for headlines and multi for paragraphs.
     * Default is multi.
     */
    mode: PropTypes.string,

    /**
     * (Boolean) When mode is single and forceSingleModeWidth is true, the element's height will be ignored.
     * Default is true.
     */
    forceSingleModeWidth: PropTypes.bool,

    /**
     * (Number) Minimum font size in pixel. Default is 1.
     */
    min: PropTypes.number,

    /**
     * (Number) Maximum font size in pixel. Default is 100.
     */
    max: PropTypes.number,

    /**
     * (Number) Throttle in milliseconds for resize re-fitting. Default is 50.
     */
    throttle: PropTypes.number,
}

export default DashTextfit
