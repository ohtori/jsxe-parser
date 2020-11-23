import React, { useState, useEffect } from 'react';

function useLogger(value) {
  useEffect(() => {
    console.log('ValueChanged', value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value)
  };

  const clear = () => {
    setValue('');
  }

  return {
    bind: {
      value, onChange
    }, 
    clear,
    value
  }
}

export const HooksTraining = () => { 
  const input = useInput(''); 

  useLogger(input.value);

  return (
    React.createElement('div', { className : " container " }, 
      React.createElement('input', { type : " text " }, ),
      React.createElement('button', { className : " btn btn-warning ", onClick : input.clear }, "Clear input", ),
      React.createElement('h1', null, input.value, ),
    ));
}