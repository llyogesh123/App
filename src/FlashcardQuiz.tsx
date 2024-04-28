// FlashcardQuiz.tsx

import { useParams } from 'react-router-dom';

// Static flashcard data
const flashcards = [
  { question: "Java", answer: "Programming Language", imageUrl: "https://freecomputerbooks.com/covers/Java-Programming-Wikibooks.jpg", category: "Programming" },
  // ...other flashcards...
];

const FlashcardQuiz = () => {
const { question } = useParams<{ question: string }>();

// Find the flashcard with the matching question
const flashcard = flashcards.find(card => card.question === decodeURIComponent(question || ""));

if (!flashcard) {
    return <div>Flashcard not found</div>;
}

  return (
    <div>
      <h1>{flashcard.question}</h1>
      <p>{flashcard.answer}</p>
      <img src={flashcard.imageUrl} alt={flashcard.question} />
      <p>{flashcard.category}</p>
    </div>
  );
};

export default FlashcardQuiz;