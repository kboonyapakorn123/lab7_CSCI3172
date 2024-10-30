import React, { useState } from 'react';
import './App.css';

function App() {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const calculateArea = () => {
    if (radius && !isNaN(radius) && radius > 0) {
      const area = Math.PI * Math.pow(radius, 2);
      setArea(area.toFixed(2));
    } else {
      alert("Please enter a valid positive number for the radius.");
      setArea(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Circle Area Calculator</h1>
        <div className="input-container">
          <label>
            Radius: 
            <input
              type="number"
              value={radius}
              onChange={handleRadiusChange}
              placeholder="Enter radius"
            />
          </label>
          <button onClick={calculateArea}>
            Calculate Area
          </button>
        </div>
        {area !== null && (
          <p>The area of the circle is: <strong>{area} square units</strong></p>
        )}
      </header>
    </div>
  );
}

export default App;
