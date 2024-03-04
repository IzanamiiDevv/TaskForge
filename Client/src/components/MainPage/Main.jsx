import React, { useState, useEffect } from 'react';
import Container from './Container';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/testLoad');
        if (response.ok) {
          const data = await response.json();
          setElements(data.datas || []);
        } else {
          console.error('Failed to fetch data from the server');
        }
      } catch (error) {
        console.error('Error fetching data from the server:', error.message);
      }
    };
    fetchData();
  }, []);

  const addElement = () => {
    const newElement = {
      id: uuidv4(),
      content: inputValue,
    };
    setElements([...elements, newElement]);
    callFetch([...elements, newElement]);
    setInputValue('');
  };

  const deleteElement = (id) => {
    const updatedElements = elements.filter((element) => element.id !== id);
    setElements(updatedElements);
    callFetch(updatedElements);
  };

  return (
    <div>
      <h1>I Love Programming</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
            setInputValue(e.target.value);
        }}
      />
      <button onClick={()=>{
        addElement()
      }}>Add Element</button>
      {elements.map((element)=>{
        return(
            <Container key={element.id} obj={element} onDelete={deleteElement} />
        )
      })}
    </div>
  );
};

function callFetch(data){
  const body = {
    datas : data
  }
  fetch('http://localhost:3000/testcall',{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then((response)=>response.text())
  .then(data => {
    console.log(data)
  }).catch(err => {
    console.error(err)
  })
}

export default Main;