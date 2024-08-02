import React, { useState, useEffect } from 'react';

const API_KEY = '504482a30ea245a68de182050241002';
const DEFAULT_CITY = 'Kigali';

export default function Component8() {
    const [time, setTime] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWeather(DEFAULT_CITY);

        const interval = setInterval(() => {
            updateTime();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    async function fetchWeather(city) {
        try {
            const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
            const response = await fetch(url, { mode: "cors" });
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeather(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    const updateTime = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        setTime(`${hours}:${minutes}:${seconds}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='flex flex-col-reverse py-5 h-58 justify-start w-full gap-8 bg-blue-200 md:h-32 lg:h-32 lg:w-2/5 mt-2 ml-auto lg:absolute lg:right-0 z-10 text-center' style={{ top: '-70px', '@media (max-width: 767px)': { top: '0px' } }}>
            <div className='flex flex-row justify-center gap-10 items-center '>
                <div className='text-4xl'>
                    <h2 className='text-2xl font-sans'>
                        Humidity {weather ? `${weather.current.humidity}%` : 'N/A'}
                    </h2>
                </div>
                <div>
                    <h2 className='text-3xl  '>
                        {weather ? `${weather.current.temp_c}°C` : 'N/A'}
                    </h2>
                </div>
            </div>
            <div>
                <h2 className='font-sans text-2xl sm:'>Time: {time}</h2>
            </div>
        </div>
    );
}
