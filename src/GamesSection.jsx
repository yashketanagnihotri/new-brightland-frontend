// components/GamesSection.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const correctAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const correctNumbers = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

function shuffle(array) {
  return [...array].sort(() => 0.5 - Math.random());
}

export default function GamesSection() {
  const [alphabets, setAlphabets] = useState(shuffle(correctAlphabet));
  const [numbers, setNumbers] = useState(shuffle(correctNumbers));

  const handleDragEnd = (result, items, setItems) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setItems(reordered);
  };

  const checkCorrect = (items, correct) => {
    return JSON.stringify(items) === JSON.stringify(correct);
  };

  return (
    <section className="bg-indigo-100 p-6 rounded-xl m-4">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-6">Playful Games</h2>

      {/* Alphabet Game */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-indigo-600 text-center mb-2">Alphabet Ordering Game</h3>
        <DragDropContext onDragEnd={(result) => handleDragEnd(result, alphabets, setAlphabets)}>
          <Droppable droppableId="alphabets" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-wrap justify-center gap-2 p-4 bg-white rounded-xl shadow-inner"
              >
                {alphabets.map((letter, index) => (
                  <Draggable key={letter} draggableId={letter} index={index}>
                    {(provided) => (
                      <div
                        className="bg-indigo-300 text-white font-bold p-3 rounded-full cursor-move"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {letter}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="text-center mt-3 text-lg">
          {checkCorrect(alphabets, correctAlphabet) ? '✅ Great job!' : '🧐 Keep trying!'}
        </div>
      </div>

      {/* Number Game */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-600 text-center mb-2">Number Ordering Game</h3>
        <DragDropContext onDragEnd={(result) => handleDragEnd(result, numbers, setNumbers)}>
          <Droppable droppableId="numbers" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-wrap justify-center gap-2 p-4 bg-white rounded-xl shadow-inner"
              >
                {numbers.map((num, index) => (
                  <Draggable key={num} draggableId={num} index={index}>
                    {(provided) => (
                      <div
                        className="bg-indigo-300 text-white font-bold p-3 rounded-full cursor-move"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {num}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="text-center mt-3 text-lg">
          {checkCorrect(numbers, correctNumbers) ? '✅ Well done!' : '🧠 Try again!'}
        </div>
      </div>
    </section>
  );
}
