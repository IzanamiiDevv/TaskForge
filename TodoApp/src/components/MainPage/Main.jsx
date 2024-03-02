import React, { useState } from 'react';
import Container from './Container';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

const Main = () => {
  const [elements, setElements] = useState([]);

  // Function to add a new element to the DOM
  const addElement = () => {
    const newElement = {
      id: uuidv4(), // Generate a unique ID using UUID
      content: `New Element ${elements.length + 1}`,
    };
    setElements([...elements, newElement]);
  };

  // Function to delete an element by id
  const deleteElement = (id) => {
    const updatedElements = elements.filter((element) => element.id !== id);
    setElements(updatedElements);
  };

  return (
    <div>
      <h1>React DOM Manipulation</h1>
      <button onClick={addElement}>Add Element</button>
      {elements.map((element) => (
        <Container key={element.id} obj={element} onDelete={deleteElement} />
      ))}
    </div>
  );
};

export default Main;
