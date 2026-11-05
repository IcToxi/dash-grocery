import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'

const buildText = ({date, format, locale, timezone, now}) => {
    let m = date ? moment(date) : moment(now)
    if (timezone) {
        m = m.tz(timezone)
    }
    if (locale) {
        m = m.locale(locale)
    }
    return m.format(format)
}

/**
 * A live clock that renders the current (or a given) time using moment.js
 * format tokens.
 */
const DashClock = ({
    id,
    class_name,
    children,
    date,
    format = 'HH:mm:ss',
    locale,
    timezone,
    ticking = false,
    blinking = false,
    interval = 1000,
    style,
}) => {
    const [now, setNow] = useState(() => Date.now())
    const [on, setOn] = useState(true)

    useEffect(() => {
        if (!ticking || date) {
            return undefined
        }
        const timer = setInterval(() => setNow(Date.now()), interval)
        return () => clearInterval(timer)
    }, [ticking, date, interval])

    useEffect(() => {
        if (!blinking) {
            return undefined
        }
        const timer = setInterval(() => setOn(value => !value), 500)
        return () => clearInterval(timer)
    }, [blinking])

    const text = buildText({date, format, locale, timezone, now})
    let content = text
    if (blinking && blinking !== 'all') {
        const parts = text.split(':')
        content = parts.flatMap((part, index) =>
            index === 0
                ? [part]
                : [
                      <span key={index} style={{opacity: on ? 1 : 0}}>
                          :
                      </span>,
                      part,
                  ]
        )
    }

    return (
        <time
            id={id}
            className={class_name}
            style={{...style, opacity: blinking === 'all' && !on ? 0 : undefined}}
            dateTime={moment(date || now).toISOString()}
        >
            {content}
            {children}
        </time>
    )
}

DashClock.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Inline CSS styles for the element.
     */
    style: PropTypes.object,

    /**
     * Appended after the formatted time.
     */
    children: PropTypes.node,

    /**
     * A fixed date/time to show (ISO string) instead of the current time.
     */
    date: PropTypes.string,

    /**
     * moment.js format string, e.g. "HH:mm:ss" or "dd, MMMM Mo, YY". Default is "HH:mm:ss".
     */
    format: PropTypes.string,

    /**
     * Locale code such as "en" or "zh-cn".
     */
    locale: PropTypes.string,

    /**
     * IANA time zone, e.g. "Asia/Shanghai".
     */
    timezone: PropTypes.string,

    /**
     * Update the clock every `interval` milliseconds.
     */
    ticking: PropTypes.bool,

    /**
     * true blinks the ":" separators; "all" blinks the entire text.
     */
    blinking: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    /**
     * Milliseconds between updates when ticking. Default is 1000.
     */
    interval: PropTypes.number,
}

export default DashClock
