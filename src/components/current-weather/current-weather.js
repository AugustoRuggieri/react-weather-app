import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>Belgrade</p>
                    <p className='weather-description'>Sunny</p>
                </div>
                <img alt='weather' className='weather-icon' src='icons/01d.png' />
            </div>
            <div className='bottom'>
                <p className='temperature'>18°C</p>
                <div className='details'>
                    <div className='parameters-row'>
                        <span className='parameters-label'>Details</span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameters-label'>Feels like</span>
                        <span className='parameters-value'>20°C</span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameters-label'>Wind</span>
                        <span className='parameters-value'>2m/s</span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameters-label'>Humidity</span>
                        <span className='parameters-value'>15%</span>
                    </div>
                    <div className='parameters-row'>
                        <span className='parameters-label'>Pressure</span>
                        <span className='parameters-value'>15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;