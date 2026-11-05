import React, {useCallback, useEffect, useLayoutEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const toMs = value => {
    if (typeof value === 'number') {
        return `${value}ms`
    }
    return value || '0.4s'
}

/**
 * A Masonry-style layout that places each child in the shortest column.
 */
const DashMasonry = ({
    id,
    class_name,
    children,
    elementType = 'div',
    options = {},
    style,
}) => {
    const containerRef = useRef(null)
    const itemRefs = useRef([])
    const frame = useRef(0)
    const optionsRef = useRef(options)
    optionsRef.current = options

    const layout = useCallback(() => {
        const container = containerRef.current
        const items = itemRefs.current.filter(Boolean)
        if (!container || !items.length) {
            return
        }
        const opts = optionsRef.current || {}
        const gutter = opts.gutter || 0
        const originLeft = opts.originLeft !== false
        const originTop = opts.originTop !== false
        const containerWidth = container.parentElement
            ? container.parentElement.clientWidth
            : container.clientWidth

        let columnWidth = opts.columnWidth
        if (typeof columnWidth === 'string') {
            const sizer = container.querySelector(columnWidth)
            columnWidth = sizer ? sizer.offsetWidth : null
        }
        if (!columnWidth) {
            columnWidth = items[0].offsetWidth || 1
        }

        const step = columnWidth + gutter
        const cols = Math.max(1, Math.floor((containerWidth + gutter) / step))
        const heights = new Array(cols).fill(0)
        const placed = []
        let cursor = 0

        items.forEach(item => {
            const span = Math.min(
                cols,
                Math.max(1, Math.round((item.offsetWidth + gutter) / step))
            )
            const maxColumn = cols - span + 1
            let column = 0
            if (opts.horizontalOrder) {
                column = cursor % maxColumn
                cursor += span
            } else {
                let best = Infinity
                for (let c = 0; c < maxColumn; c++) {
                    const top = Math.max(...heights.slice(c, c + span))
                    if (top < best) {
                        best = top
                        column = c
                    }
                }
            }
            const top = Math.max(...heights.slice(column, column + span))
            const bottom = top + item.offsetHeight + gutter
            for (let c = column; c < column + span; c++) {
                heights[c] = bottom
            }
            placed.push({item, column, top, span})
        })

        const total = Math.max(...heights) - gutter
        const usedWidth = cols * step - gutter

        if (opts.fitWidth) {
            container.style.width = `${usedWidth}px`
            container.style.marginLeft = 'auto'
            container.style.marginRight = 'auto'
        }
        container.style.height = `${Math.max(total, 0)}px`

        placed.forEach(({item, column, top, span}) => {
            const x = column * step
            const y = originTop ? top : total - top - item.offsetHeight
            if (originLeft) {
                item.style.left = opts.percentPosition
                    ? `${(x / containerWidth) * 100}%`
                    : `${x}px`
                item.style.right = 'auto'
            } else {
                const right = usedWidth - x - (span * step - gutter)
                item.style.right = `${Math.max(right, 0)}px`
                item.style.left = 'auto'
            }
            item.style.top = `${y}px`
            item.style.transition = `left ${toMs(opts.transitionDuration)}, top ${toMs(opts.transitionDuration)}`
            item.style.visibility = 'visible'
        })
    }, [])

    const schedule = useCallback(() => {
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(layout)
    }, [layout])

    useLayoutEffect(() => {
        layout()
    })

    useEffect(() => {
        const container = containerRef.current
        if (!container || typeof ResizeObserver === 'undefined') {
            return undefined
        }
        const observer = new ResizeObserver(() => {
            schedule()
        })
        observer.observe(container.parentElement || container)
        itemRefs.current.filter(Boolean).forEach(item => observer.observe(item))
        container.addEventListener('load', schedule, true)
        return () => {
            cancelAnimationFrame(frame.current)
            container.removeEventListener('load', schedule, true)
            observer.disconnect()
        }
    }, [schedule, React.Children.count(children)])

    const Tag = elementType
    const columnWidth =
        typeof options.columnWidth === 'number' ? options.columnWidth : undefined

    return (
        <Tag
            id={id}
            className={class_name}
            ref={containerRef}
            style={{position: 'relative', ...(options.containerStyle || {}), ...style}}
        >
            {React.Children.toArray(children).map((child, index) => (
                <div
                    key={child.key === null ? index : child.key}
                    ref={node => {
                        itemRefs.current[index] = node
                    }}
                    style={{
                        position: 'absolute',
                        width: columnWidth,
                        visibility: 'hidden',
                    }}
                >
                    {child}
                </div>
            ))}
        </Tag>
    )
}

DashMasonry.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Items to lay out; every child is one masonry item.
     */
    children: PropTypes.node,

    /**
     * HTML tag used for the container. Default is div.
     */
    elementType: PropTypes.string,

    /**
     * Layout options (same names as masonry-layout).
     */
    options: PropTypes.shape({
        /**
         * Accepted for compatibility; every child is an item.
         */
        itemSelector: PropTypes.string,

        /**
         * Column width in px, or a CSS selector of an element whose width is used.
         * Defaults to the width of the first item.
         */
        columnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        /**
         * Space in px between items.
         */
        gutter: PropTypes.number,

        /**
         * Place items left-to-right in order instead of in the shortest column.
         */
        horizontalOrder: PropTypes.bool,

        /**
         * Use percentage positions so the layout is fluid.
         */
        percentPosition: PropTypes.bool,

        /**
         * Accepted for compatibility; has no effect.
         */
        stamp: PropTypes.string,

        /**
         * Size and center the container to fit the columns.
         */
        fitWidth: PropTypes.bool,

        /**
         * Lay out from the left (default) or the right.
         */
        originLeft: PropTypes.bool,

        /**
         * Lay out from the top (default) or the bottom.
         */
        originTop: PropTypes.bool,

        /**
         * Extra CSS styles for the container.
         */
        containerStyle: PropTypes.object,

        /**
         * Duration of the move transition, e.g. "0.4s" or 400 (ms).
         */
        transitionDuration: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),

        /**
         * Accepted for compatibility; has no effect.
         */
        stagger: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        /**
         * Accepted for compatibility; the layout always follows resizes.
         */
        resize: PropTypes.bool,

        /**
         * Accepted for compatibility; the layout is always initialized.
         */
        initLayout: PropTypes.bool,
    }),

    /**
     * Accepted for compatibility; image loads are always tracked.
     */
    disableImagesLoaded: PropTypes.bool,

    /**
     * Accepted for compatibility; has no effect.
     */
    updateOnEachImageLoad: PropTypes.bool,

    /**
     * Accepted for compatibility; has no effect.
     */
    imagesLoadedOptions: PropTypes.object,

    /**
     * Accepted for compatibility; item resizes are always tracked.
     */
    enableResizableChildren: PropTypes.bool,

    /**
     * Inline CSS styles for the container.
     */
    style: PropTypes.object,
}

export default DashMasonry
