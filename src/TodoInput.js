
import React, { useState } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAddList = () => {
    if (inputText.trim() === '') {
      alert('Please write something!');
    } else {
      props.addList(inputText);
      setInputText('');
      setErrorMsg('');
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder='Enter Your Text'
          className='input-box-todo'
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setErrorMsg('');
          }}
        />
        <button
          className='add-btn'
          onClick={handleAddList}
        >
          +
        </button>

      </div>
    </div>
  );
}

export default TodoInput;
