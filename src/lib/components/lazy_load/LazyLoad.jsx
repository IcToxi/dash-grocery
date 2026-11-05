import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

const toMargin = offset => {
    if (Array.isArray(offset)) {
        const [top, bottom = top] = offset
        return `${top}px 0px ${bottom}px 0px`
    }
    const value = Number.isFinite(offset) ? offset : 0
    return `${value}px`
}

/**
 * Renders its children only when they approach the viewport, using
 * IntersectionObserver.
 */
const DashLazyLoad = ({
    id,
    class_name,
    children,
    style,
    height,
    once = false,
    offset = 0,
    scrollContainer,
    placeholder,
    unmountIfInvisible = false,
}) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    const [measured, setMeasured] = useState(null)

    useEffect(() => {
        const node = ref.current
        if (!node || typeof IntersectionObserver === 'undefined') {
            setVisible(true)
            return undefined
        }
        const root =
            typeof scrollContainer === 'string'
                ? document.querySelector(scrollContainer)
                : null
        const observer = new IntersectionObserver(
            entries => {
                const hit = entries.some(entry => entry.isIntersecting)
                if (hit) {
                    setVisible(true)
                    if (once) {
                        observer.disconnect()
                    }
                } else if (unmountIfInvisible) {
                    setMeasured(node.getBoundingClientRect().height)
                    setVisible(false)
                }
            },
            {root, rootMargin: toMargin(offset)}
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [once, JSON.stringify(offset), scrollContainer, unmountIfInvisible])

    const placeholderStyle =
        visible || (height === undefined && measured === null)
            ? {}
            : {height: height === undefined ? measured : height}

    return (
        <div
            id={id}
            className={class_name}
            ref={ref}
            style={{...style, ...placeholderStyle}}
        >
            {visible ? children : placeholder || null}
        </div>
    )
}

DashLazyLoad.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The content to load lazily.
     */
    children: PropTypes.node,

    /**
     * A CSS selector of a scrollable ancestor. The window is used if omitted.
     */
    scrollContainer: PropTypes.string,

    /**
     * Height reserved for the content before it loads (number of px or any
     * CSS length). Setting it avoids layout jumps.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Once loaded, keep the content mounted. Default is false: with
     * `unmountIfInvisible` the content is removed again when it leaves view.
     */
    once: PropTypes.bool,

    /**
     * Distance in px from the viewport at which loading starts. A pair
     * [top, bottom] sets the two sides separately.
     */
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),

    /**
     * Content shown until the real content is loaded.
     */
    placeholder: PropTypes.any,

    /**
     * Unmount the content when it scrolls out of view.
     */
    unmountIfInvisible: PropTypes.bool,

    /**
     * Inline CSS styles for the wrapper element.
     */
    style: PropTypes.object,

    /**
     * Accepted for backwards compatibility; IntersectionObserver makes it
     * unnecessary, so it has no effect.
     */
    throttle: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

    /**
     * Accepted for backwards compatibility; has no effect.
     */
    debounce: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

    /**
     * Accepted for backwards compatibility; has no effect.
     */
    scroll: PropTypes.bool,

    /**
     * Accepted for backwards compatibility; has no effect.
     */
    resize: PropTypes.bool,

    /**
     * Accepted for backwards compatibility; has no effect.
     */
    overflow: PropTypes.bool,

    /**
     * Accepted for backwards compatibility; has no effect.
     */
    classNamePrefix: PropTypes.string,
}

export default DashLazyLoad
