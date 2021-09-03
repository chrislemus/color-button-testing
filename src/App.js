import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [btnColor, setBtnColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newBtnColor =
    btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : btnColor }}
        disabled={disabled}
        onClick={() => setBtnColor(newBtnColor)}
      >
        Change to {replaceCamelWithSpaces(newBtnColor)}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
