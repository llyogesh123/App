// src/App.tsx
import React from 'react';
import Quiz from './components/Quiz';
import './styles.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <div className="text-center bg-red-100">
      <h1 className="font-bold text-4xl my">Welcome to Flashcard Learning App</h1>
      <Quiz />
    </div>
  );
};

export default App;
