import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import {omit} from 'ramda'

/**
 * Wrapped from [react-masonry-component](https://github.com/eiriklv/react-masonry-component).
 */
export default class DashMasonry extends Component {
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
         * children
         */
        children: PropTypes.node,

        /**
         * default 'div'
         */
        elementType: PropTypes.string,

        /**
         * masonry options
         */
        options: PropTypes.shape({
            /**
             * Specifies which child elements will be used as item elements in the layout.
             */
            itemSelector: PropTypes.string,
            /**
             * Aligns items to a horizontal grid.
             */
            columnWidth: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            /**
             * Adds horizontal space between item elements.
             */
            gutter: PropTypes.number,
            /**
             * Lays out items to (mostly) maintain horizontal left-to-right order.
             */
            horizontalOrder: PropTypes.bool,
            /**
             * Sets item positions in percent values, rather than pixel values.
             * percentPosition: true works well with percent-width items,
             * as items will not transition their position on resize.
             */
            percentPosition: PropTypes.bool,
            /**
             * Specifies which elements are stamped within the layout.
             * Masonry will layout items below stamped elements.
             */
            stamp: PropTypes.string,
            /**
             * Sets the width of the container to fit the available number of columns,
             * based the size of container's parent element.
             * When enabled, you can center the container with CSS.
             */
            fitWidth: PropTypes.bool,
            /**
             * Controls the horizontal flow of the layout.
             * By default, item elements start positioning at the left,
             * with originLeft: true. Set originLeft: false for right-to-left layouts.
             */
            originLeft: PropTypes.bool,
            /**
             * Controls the vertical flow of the layout.
             * By default, item elements start positioning at the top,
             * with originTop: true.
             * Set originTop: false for bottom-up layouts.
             */
            originTop: PropTypes.bool,
            /**
             * CSS styles that are applied to the container element.
             */
            containerStyle: PropTypes.object,
            /**
             * Duration of the transition when items change position or appearance,
             * set in a CSS time format. Default: transitionDuration: '0.4s'
             */
            transitionDuration: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            /**
             * Staggers item transitions, so items transition incrementally after one another.
             * Set as a CSS time format, '0.03s', or as a number in milliseconds, 30.
             */
            stagger: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            /**
             * Adjusts sizes and positions when window is resized. Enabled by default resize: true.
             */
            resize: PropTypes.bool,
            /**
             * Enables layout on initialization. Enabled by default initLayout: true.
             */
            initLayout: PropTypes.bool,
        }),

        /**
         * default false
         */
        disableImagesLoaded: PropTypes.bool,

        /**
         * default false and works only if disableImagesLoaded is false
         */
        updateOnEachImageLoad: PropTypes.bool,

        /**
         * default {}
         */
        imagesLoadedOptions: PropTypes.object,

        /**
         * onImagesLoaded
         */
        onImagesLoaded: PropTypes.func,

        /**
         * enableResizableChildren
         */
        enableResizableChildren: PropTypes.bool,

        /**
         * func onLayoutComplete
         */
        onLayoutComplete: PropTypes.func,

        /**
         * func onRemoveComplete
         */
        onRemoveComplete: PropTypes.func,

        /**
         * style
         */
        style: PropTypes.object,
    }

    render () {
        const {class_name, children} = this.props

        return (
            <Masonry
                {...omit(['children', 'class_name'], this.props)}
                className={class_name}
            >
                {children}
            </Masonry>
        )
    }
}
