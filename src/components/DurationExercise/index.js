import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1); // Increment by 1 second
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const startTimer = () => setIsRunning(true);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0); // Reset the time
    };

    // Format the timer to be in mins and secs
    const formatTime = (timeInSeconds) => {
        const seconds = String(timeInSeconds % 60).padStart(2, '0');
        const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(time)}</p>
            {!isRunning ? (
                <button onClick={startTimer}>Start Timer</button>
            ) : (
                <button onClick={resetTimer}>Reset Timer</button>
            )}
        </div>
    );
}

export default DurationExercise;