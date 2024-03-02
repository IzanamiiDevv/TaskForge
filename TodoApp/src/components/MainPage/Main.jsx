import React, { useState } from 'react';
import Container from './Container';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [elements, setElements] = useState([]);

  const addElement = () => {
    const newElement = {
      id: uuidv4(),
      content: inputValue,
    };
    setElements([...elements, newElement]);
    setInputValue('');
  };

  const deleteElement = (id) => {
    const updatedElements = elements.filter((element) => element.id !== id);
    setElements(updatedElements);
  };

  return (
    <div>
      <h1>I Love Programming</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
            console.log(e.target.value)
            setInputValue(e.target.value);
        }}
      />
      <button onClick={addElement}>Add Element</button>
      {elements.map((element) => (
        <Container key={element.id} obj={element} onDelete={deleteElement} />
      ))}
    </div>
  );
};

export default Main;
