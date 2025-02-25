import React, { useState } from 'react';

const DistanceExercise = ({ name }) => {
    const [distance, setDistance] = useState('');
    const [totalKm, setTotalKm] = useState(0);
    const [totalMiles, setTotalMiles] = useState(0);
    const [unit, setUnit] = useState('km');

    const handleChange = (e) => {
        setDistance(e.target.value);
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    const handleAddDistance = () => {
        const enteredDistance = parseFloat(distance);

        if (!enteredDistance || enteredDistance <= 0) {
            alert('Please enter a valid distance.');
            return;
        }

        if (unit === 'miles') {
            // convert miles to kilometers
            const kmDistance = enteredDistance * 1.60934;
            setTotalKm(prevKm => prevKm + kmDistance);
            setTotalMiles(prevMiles => prevMiles + enteredDistance);
        } else {
            setTotalKm(prevKm => prevKm + enteredDistance);
            setTotalMiles(prevMiles => prevMiles + (enteredDistance * 0.621371));
        }

        // clear after adding
        setDistance('');
    };

    const handleReset = () => {
        setTotalKm(0);
        setTotalMiles(0);
        setDistance('');
    };

    return (
        <div>
            <h2>{name}</h2>

            <div>
                <label>
                    Distance Traveled:
                    <input
                        type="number"
                        value={distance}
                        onChange={handleChange}
                        placeholder="Enter distance"
                    />
                </label>

                <label>
                    Unit:
                    <select value={unit} onChange={handleUnitChange}>
                        <option value="km">Kilometers (km)</option>
                        <option value="miles">Miles</option>
                    </select>
                </label>

                <button onClick={handleAddDistance}>Add Distance</button>
            </div>

            <div>
                <p>You have traveled: {distance} {unit}</p>
            </div>

            <div>
                <p>Total distance: {totalKm.toFixed(2)} km</p>
                <p>Total distance in miles: {totalMiles.toFixed(2)} miles</p>
            </div>

            <button onClick={handleReset}>Reset</button> { }
        </div>
    );
};

export default DistanceExercise;