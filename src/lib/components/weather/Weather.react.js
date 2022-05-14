import ReactWeather, { useOpenWeather, useWeatherBit, useVisualCrossing } from 'react-open-weather';
import PropTypes from 'prop-types';
import { omit, pick } from "ramda";

/**
 * Wrapped from [react-open-weather](https://github.com/farahat80/react-open-weather).
 *
 */
const DashWeather = (props) => {
    const services = {
        'OpenWeather': useOpenWeather,
        'WeatherBit': useWeatherBit,
        'VisualCrossing': useVisualCrossing
    };

    const { data, isLoading, errorMessage } = (props.option === 'custom' ?
        props.func(...props) :
        services[props.option]({
            key: props.api_key,
            ...pick(["lat", "lon", "lang", "unit"], props)
        }));

    return (
        <ReactWeather
            {
            ...omit(
                ["api_key", "lat", "lon", "unit", "class_name", "option", "customData", "func"],
                props
            )
            }
            className={props.class_name}
            data={data}
            isLoading={isLoading}
            errorMessage={errorMessage}
        />
    );
};

DashWeather.defaultProps = {
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
    locationLabel: 'Munich',
    unitsLabels: { temperature: 'C', windSpeed: 'Km/h' },
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
    func: ((...props) => ({
        data: props.customData,
        isLoading: undefined,
        errorMessage: undefined
    }))
};


// values are (metric, standard, imperial)
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
     * your api key from the openweather, weatherbit or visual crossing websites
     */
    api_key: PropTypes.string.isRequired,

    /**
     * latitude of the location
     */
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * longitude of the location
     */
    lon: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * the language to show "humidity" and "wind speed", feel free to open a PR to lang.js to add more languages
     * "en", "de", "es"
     */
    lang: PropTypes.string,

    /**
     * the unit will be passed to the openweather, weatherbit or visualcrossing "units" property, please check their documentation for more info
     */
    unit: PropTypes.string,

    /**
     * The name of the location or city to show in the component
     */
    locationLabel: PropTypes.string,

    /**
     * the labels to be used for temprature and windspeed
     */
    unitsLabels: PropTypes.shape({
        temperature: PropTypes.string,
        windSpeed: PropTypes.string
    }),

    /**
     * whether or not to show the forecast bottom part of the component
     */
    showForecast: PropTypes.bool,

    /**
     * useOpenWeather, useWeatherBit and useVisualCrossing options
     */
    option: PropTypes.string,

    /**
     * Custom styling
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
     * 
     */
    customData: PropTypes.object,

    /**
     * 
     */
    func: PropTypes.func
};


export default DashWeather;