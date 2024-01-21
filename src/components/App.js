import React, { useState } from "react";
import LangList from "./LangList";
import InputBox from "./InputBox";
import useVoice from "./../hooks/useVoice";
import '../styles/style.css';

const App = () => {
  const [lang, setLang] = useState('en-us');
  const [term, setTerm] = useState('Hello');
  const [speech, search] = useVoice([lang, term]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await search([lang, term])
    const audioUrl = URL.createObjectURL(speech);
    const audio = new Audio(audioUrl);
    await audio.play();
  };

  return (
    <div id="container">
      <div id="child">
        <div id="header">Text-to-Speech</div>
        <form onSubmit={handleSubmit}>
          <LangList setLang={setLang} />
          <InputBox setTerm={setTerm} />
          <button className="ui primary button" type='submit'>Speech Text</button>
        </form>
      </div>
    </div>
  );
};

export default App;
