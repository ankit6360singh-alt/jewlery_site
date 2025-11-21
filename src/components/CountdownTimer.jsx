import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            // return; // Show even if 0 for layout stability
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-secondary">
                    {timeLeft[interval] || '0'}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mt-1">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="flex justify-center items-center py-8">
            {timerComponents.length ? timerComponents : <span className="text-2xl font-serif text-secondary">Offer Expired!</span>}
        </div>
    );
};

export default CountdownTimer;
