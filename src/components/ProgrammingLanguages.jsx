import React from 'react';
import js from "../assets/icons8-react-40.png";
import python from "../assets/icons8-python-48.png";
import php from "../assets/icons8-php-48.png";
import kotlin from "../assets/icons8-kotlin-48.png";
import './ProgrammingLanguages.css'

const languageIcons = {
  javascript: js,
  python: python,
  php: php,
  kotlin: kotlin
};

function ProgrammingLanguages({ language }) {
  const iconSrc = languageIcons[language.toLowerCase()];

  if (!iconSrc) {
    return <div>Icon not found</div>;
  }

  return <img className='language-icon' src={iconSrc} alt=''/>;
};

export default ProgrammingLanguages;
