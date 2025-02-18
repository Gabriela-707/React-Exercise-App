import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Classify each exercise to a type
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Planks", type: "duration" },
    { name: "Running", type: "duration" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
  ];

  const renderExercise = () => {
    let exerciseComponent = null;

    // Checks which type of exercise it is using if statments
    if (selectedExercise?.type === 'repetition') {
      exerciseComponent = <RepetitionExercise name={selectedExercise.name} />;
    } else if (selectedExercise?.type === 'duration') {
      exerciseComponent = <DurationExercise name={selectedExercise.name} />;
    }
    return exerciseComponent;
  };

  return (
    <div className="App">
      {!selectedExercise ? (
        <div>
          <h1>Select an Exercise</h1>
          <div className="exercise-menu">
            {exercises.map((exercise, index) => (
              <button
                key={index}
                onClick={() => setSelectedExercise(exercise)}
              >
                {exercise.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedExercise(null)}>Return</button>
          {renderExercise()}
        </div>
      )}
    </div>
  );
}

export default App;
