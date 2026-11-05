import React from 'react'
import PropTypes from 'prop-types'
import RGL, {WidthProvider} from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const AutoWidthGrid = WidthProvider(RGL)

const normalizeLayout = (layout, count) =>
    Array.from({length: count}, (_, index) => {
        const item = (layout || [])[index] || {}
        return {
            x: (index * 2) % 12,
            y: Math.floor(index / 6) * 2,
            w: 2,
            h: 2,
            ...item,
            i: String(item.i === undefined ? index : item.i),
        }
    })

/**
 * A draggable and resizable grid, wrapped from
 * [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout).
 * Every child becomes one grid item; the item at position N is described by
 * the Nth entry of `layout`.
 */
const GridLayout = ({
    id,
    class_name,
    children,
    layout,
    cols = 12,
    rowHeight = 30,
    margin = [10, 10],
    containerPadding,
    isDraggable = true,
    isResizable = true,
    compactType = 'vertical',
    preventCollision = false,
    setProps,
}) => {
    const items = React.Children.toArray(children)
    const normalized = normalizeLayout(layout, items.length)

    return (
        <div id={id} className={class_name}>
            <AutoWidthGrid
                layout={normalized}
                cols={cols}
                rowHeight={rowHeight}
                margin={margin}
                containerPadding={containerPadding}
                isDraggable={isDraggable}
                isResizable={isResizable}
                compactType={compactType}
                preventCollision={preventCollision}
                onLayoutChange={next => {
                    if (setProps) {
                        setProps({layout: next})
                    }
                }}
            >
                {items.map((child, index) => (
                    <div key={normalized[index].i}>{child}</div>
                ))}
            </AutoWidthGrid>
        </div>
    )
}

GridLayout.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Grid items. Each child is placed according to the matching `layout` entry.
     */
    children: PropTypes.node,

    /**
     * Item positions in grid units: a list of dicts with `x`, `y`, `w`, `h`
     * and optionally `i`, `minW`, `maxW`, `minH`, `maxH`, `static`,
     * `isDraggable` and `isResizable`. Updated when the user drags or resizes.
     */
    layout: PropTypes.arrayOf(PropTypes.object),

    /**
     * Number of columns in the grid.
     */
    cols: PropTypes.number,

    /**
     * Height of one grid row in pixels.
     */
    rowHeight: PropTypes.number,

    /**
     * [horizontal, vertical] margin between items in pixels.
     */
    margin: PropTypes.arrayOf(PropTypes.number),

    /**
     * [horizontal, vertical] padding inside the container in pixels.
     */
    containerPadding: PropTypes.arrayOf(PropTypes.number),

    /**
     * Whether items can be dragged.
     */
    isDraggable: PropTypes.bool,

    /**
     * Whether items can be resized.
     */
    isResizable: PropTypes.bool,

    /**
     * Compaction direction: 'vertical', 'horizontal' or null.
     */
    compactType: PropTypes.oneOf(['vertical', 'horizontal']),

    /**
     * If true, items cannot be pushed by others and may not overlap.
     */
    preventCollision: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
}

export default GridLayout
