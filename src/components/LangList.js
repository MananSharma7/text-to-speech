import React from "react";

const LangList = ({ setLang }) => {
  return (
    <div style={{ display: "flex" }}>
      <div id="input-label">
        Accent:
      </div>
      <select className="ui dropdown" id="drop" onChange={e => setLang(e.target.value)}>
        <option value="en-us">English</option>
        <option value="es-es">Spanish</option>
        <option value="nl-nl">Dutch</option>
        <option value="ar-sa">Arabic</option>
        <option value="zh-cn">Chinese</option>
        <option value="fr-fr">France</option>
      </select>
    </div >
  );
};

export default LangList;
