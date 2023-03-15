import React from 'react';

function handleClick() {
  alert('Button clicked');
}

function App() {
  return <button onClick={handleClick}>Click me</button>;
}

export default App;
