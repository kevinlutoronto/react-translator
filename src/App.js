import './styles.css';
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

function App() {

  const [language, setLanguage] = useState('ar');
  const [text, setText] = useState('hoho');

  return (
    <div>
      <Field onChange={setText}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
