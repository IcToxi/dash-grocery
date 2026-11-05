import React from 'react'
import ReactWeather, {
    useOpenWeather,
    useWeatherBit,
    useVisualCrossing,
} from 'react-open-weather'
import PropTypes from 'prop-types'
import {omit, pick} from 'ramda'

const WeatherDisplay = ({props, weather}) => {
    // eslint-disable-next-line react/prop-types
    const {class_name: className} = props
    return (
    <ReactWeather
        {...omit(
            [
                'api_key',
                'lat',
                'lon',
                'unit',
                'class_name',
                'option',
                'customData',
                'func',
            ],
            props
        )}
        className={className}
        data={weather.data}
        isLoading={weather.isLoading}
        errorMessage={weather.errorMessage}
    />
    )
}

WeatherDisplay.propTypes = {
    props: PropTypes.shape({
        class_name: PropTypes.string,
    }).isRequired,
    weather: PropTypes.shape({
        data: PropTypes.object,
        isLoading: PropTypes.bool,
        errorMessage: PropTypes.string,
    }).isRequired,
}

const OpenWeather = props => {
    const weather = useOpenWeather({
        key: props.api_key,
        ...pick(['lat', 'lon', 'lang', 'unit'], props),
    })

    return <WeatherDisplay props={props} weather={weather} />
}

OpenWeather.propTypes = {api_key: PropTypes.string}

const WeatherBit = props => {
    const weather = useWeatherBit({
        key: props.api_key,
        ...pick(['lat', 'lon', 'lang', 'unit'], props),
    })

    return <WeatherDisplay props={props} weather={weather} />
}

WeatherBit.propTypes = {api_key: PropTypes.string}

const VisualCrossing = props => {
    const weather = useVisualCrossing({
        key: props.api_key,
        ...pick(['lat', 'lon', 'lang', 'unit'], props),
    })

    return <WeatherDisplay props={props} weather={weather} />
}

VisualCrossing.propTypes = {api_key: PropTypes.string}

const CustomWeather = props => {
    const weather = props.func
        ? props.func(props)
        : {data: props.customData, isLoading: false, errorMessage: null}

    return <WeatherDisplay props={props} weather={weather} />
}

CustomWeather.propTypes = {
    func: PropTypes.func,
    customData: PropTypes.object,
}

/**
 * Dash component wrapping react-open-weather.
 */
const DashWeather = props => {
    switch (props.option) {
        case 'OpenWeather':
            return <OpenWeather {...props} />
        case 'WeatherBit':
            return <WeatherBit {...props} />
        case 'VisualCrossing':
            return <VisualCrossing {...props} />
        case 'custom':
            return <CustomWeather {...props} />
        default:
            throw new Error(`Unsupported weather provider: ${props.option}`)
    }
}

DashWeather.defaultProps = {
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
    locationLabel: 'Munich',
    unitsLabels: {temperature: 'C', windSpeed: 'Km/h'},
    option: 'OpenWeather',
    showForecast: true,
    theme: {
        fontFamily: 'Helvetica, sans-serif',
        gradientStart: '#0181C2',
        gradientMid: '#04A7F9',
        gradientEnd: '#4BC4F7',
        locationFontColor: '#FFF',
        todayTempFontColor: '#FFF',
        todayDateFontColor: '#B5DEF4',
        todayRangeFontColor: '#B5DEF4',
        todayDescFontColor: '#B5DEF4',
        todayInfoFontColor: '#B5DEF4',
        todayIconColor: '#FFF',
        forecastBackgroundColor: '#FFF',
        forecastSeparatorColor: '#DDD',
        forecastDateColor: '#777',
        forecastDescColor: '#777',
        forecastRangeColor: '#777',
        forecastIconColor: '#4BC4F7',
    },
}

DashWeather.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Your API key from the selected weather provider.
     */
    api_key: PropTypes.string,

    /**
     * Latitude of the location.
     */
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Longitude of the location.
     */
    lon: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Language used for labels.
     */
    lang: PropTypes.string,

    /**
     * Units passed to the selected weather provider.
     */
    unit: PropTypes.string,

    /**
     * The name of the location or city to show in the component.
     */
    locationLabel: PropTypes.string,

    /**
     * Labels used for temperature and wind speed.
     */
    unitsLabels: PropTypes.shape({
        temperature: PropTypes.string,
        windSpeed: PropTypes.string,
    }),

    /**
     * Whether to show the forecast section.
     */
    showForecast: PropTypes.bool,

    /**
     * Weather provider: OpenWeather, WeatherBit, VisualCrossing, or custom.
     */
    option: PropTypes.oneOf([
        'OpenWeather',
        'WeatherBit',
        'VisualCrossing',
        'custom',
    ]),

    /**
     * Custom styling.
     */
    theme: PropTypes.shape({
        fontFamily: PropTypes.string,
        gradientStart: PropTypes.string,
        gradientMid: PropTypes.string,
        gradientEnd: PropTypes.string,
        locationFontColor: PropTypes.string,
        todayTempFontColor: PropTypes.string,
        todayDateFontColor: PropTypes.string,
        todayRangeFontColor: PropTypes.string,
        todayDescFontColor: PropTypes.string,
        todayInfoFontColor: PropTypes.string,
        todayIconColor: PropTypes.string,
        forecastBackgroundColor: PropTypes.string,
        forecastSeparatorColor: PropTypes.string,
        forecastDateColor: PropTypes.string,
        forecastDescColor: PropTypes.string,
        forecastRangeColor: PropTypes.string,
        forecastIconColor: PropTypes.string,
    }),

    /**
     * Custom weather data. Refer to the provider data format.
     */
    customData: PropTypes.object,

    /**
     * Optional custom provider function. Receives the component props and
     * returns {data, isLoading, errorMessage}.
     */
    func: PropTypes.func,
}

export default DashWeather
