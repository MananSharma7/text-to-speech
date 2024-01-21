import React from "react";
import '../styles/style.css';

const InputBox = ({ setTerm }) => {
  return (
    <div id="input">
      <textarea
        onChange={e => setTerm(e.target.value)}
        rows='10'
        cols='50'
        placeholder="Hello!"
        id="text-area"
      >
      </textarea>
    </div >
  );
};

export default InputBox;
