import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Responsive as ResponsiveGridLayout} from 'react-grid-layout'
import {omit} from 'ramda'

/**
 * Wrapped from [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout).
 *
 */
export default class DashResponsiveGridLayout extends Component {
    static defaultProps = {}

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
         *
         * children
         */
        children: PropTypes.node,

        /**
         * This allows setting the initial width on the server side.
         * This is required unless using the HOC <WidthProvider> or similar
         */
        width: PropTypes.number,

        /**
         * If true, the container height swells and contracts to fit contents
         */
        autoSize: PropTypes.bool,

        /**
         * {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
         * Breakpoint names are arbitrary but must match in the cols and layouts objects.
         */
        breakpoints: PropTypes.object,

        /**
         * # of cols. This is a breakpoint -> cols map, e.g. {lg: 12, md: 10, ...}
         */
        cols: PropTypes.object,

        /**
         * A CSS selector for tags that will not be draggable.
         * For example: draggableCancel:'.MyNonDraggableAreaClassName'
         * If you forget the leading . it will not work.
         * .react-resizable-handle" is always prepended to this value.
         */
        draggableCancel: PropTypes.string,

        /**
         * A CSS selector for tags that will act as the draggable handle.
         * For example: draggableHandle:'.MyDragHandleClassName'
         * If you forget the leading . it will not work.
         */
        draggableHandle: PropTypes.string,

        /**
         * Compaction type.
         */
        compactType: PropTypes.oneOf(['vertical', 'horizontal']),

        /**
         * // Layout is an array of object with the format:
         * {x: number, y: number, w: number, h: number}
         * The index into the layout must match the key used on each item component.
         * If you choose to use custom keys, you can specify that key in the layout
         * array objects like so:
         * {i: string, x: number, y: number, w: number, h: number}
         */
        layout: PropTypes.array,

        /**
         * layouts is an object mapping breakpoints to layouts.
         * e.g. {lg: Layout, md: Layout, ...}
         */
        layouts: PropTypes.object,

        /**
         * margin (in pixels). Can be specified either as horizontal and vertical margin, e.g. `[10, 10]` or as a breakpoint -> margin map, e.g. `{lg: [10, 10], md: [10, 10], ...}.
         */
        margin: PropTypes.shape([PropTypes.number, PropTypes.number]),

        /**
         * containerPadding (in pixels). Can be specified either as horizontal and vertical padding, e.g. `[10, 10]` or as a breakpoint -> containerPadding map, e.g. `{lg: [10, 10], md: [10, 10], ...}.
         */
        containerPadding: PropTypes.shape([PropTypes.number, PropTypes.number]),

        /**
         * Rows have a static height, but you can change this based on breakpoints if you like.
         */
        rowHeight: PropTypes.number,

        /**
         * Configuration of a dropping element. Dropping element is a "virtual" element
         * which appears when you drag over some element from outside.
         * It can be changed by passing specific parameters:
         * i - id of an element
         * w - width of an element
         * h - height of an element
         */
        droppingItem: PropTypes.shape({
            i: PropTypes.string,
            w: PropTypes.number,
            h: PropTypes.number,
        }),

        /**
         * Flag
         */
        isDraggable: PropTypes.bool,

        /**
         * Flag
         */
        isResizable: PropTypes.bool,

        /**
         * Flag
         */
        isBounded: PropTypes.bool,

        /**
         * Uses CSS3 translate() instead of position top/left.
         * This makes about 6x faster paint performance
         */
        useCSSTransforms: PropTypes.bool,

        /**
         * If parent DOM node of ResponsiveReactGridLayout or ReactGridLayout has "transform: scale(n)" css property,
         * we should set scale coefficient to avoid render artefacts while dragging.
         */
        transformScale: PropTypes.number,

        /**
         * If true, grid can be placed one over the other.
         * If set, implies `preventCollision`.
         */
        allowOverlap: PropTypes.bool,

        /**
         * If true, grid items won't change position when being
         * dragged over. If `allowOverlap` is still false,
         * this simply won't allow one to drop on an existing object.
         */
        preventCollision: PropTypes.bool,

        /**
         * If true, droppable elements (with `draggable={true}` attribute)
         * can be dropped on the grid. It triggers "onDrop" callback
         * with position and event object as parameters.
         * It can be useful for dropping an element in a specific position
         */
        isDroppable: PropTypes.bool,

        /**
         * Defines which resize handles should be rendered
         * Allows for any combination of:
         * 's' - South handle (bottom-center)
         * 'w' - West handle (left-center)
         * 'e' - East handle (right-center)
         * 'n' - North handle (top-center)
         * 'sw' - Southwest handle (bottom-left)
         * 'nw' - Northwest handle (top-left)
         * 'se' - Southeast handle (bottom-right)
         * 'ne' - Northeast handle (top-right)
         */
        resizeHandles: PropTypes.array,

        /**
         * Custom component for resize handles
         * See `handle` as used in https://github.com/react-grid-layout/react-resizable#resize-handle
         * Your component should have the class `.react-resizable-handle`, or you should add your custom
         * class to the `draggableCancel` prop.
         */
        resizeHandle: PropTypes.element,

        /**
         * Callback so you can save the layout.
         * AllLayouts are keyed by breakpoint.
         */
        onLayoutChange: PropTypes.func,

        // WIP

        /**
         * // Calls when an element has been dropped into the grid from outside.
         */
        onDrop: PropTypes.func,

        /**
         * Calls when an element is being dragged over the grid from outside as above.
         * This callback should return an object to dynamically change the droppingItem size
         * Return false to short-circuit the dragover
         */
        onDropDragOver: PropTypes.func,

        /**
         * Calls back with breakpoint and new # cols
         *
         */
        onBreakpointChange: PropTypes.func,

        /**
         * Callback when the width changes, so you can modify the layout as needed.
         */
        onWidthChange: PropTypes.func,

        //innerRef: {current: null | HTMLDivElement},
    }

    render () {
        const {class_name, children} = this.props

        return (
            <ResponsiveGridLayout
                {...omit(['children', 'class_name'], this.props)}
                className={class_name}
            >
                {children}
            </ResponsiveGridLayout>
        )
    }
}
