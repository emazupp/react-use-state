import { useState } from "react";
import ButtonList from "../ButtonList/ButtonList";
import Card from "../Card/Card";

export default function Main({ data }) {
  const newData = data.map((item) => ({ ...item, active: false }));
  const [language, setLanguage] = useState(newData);

  const indexByElementId = (id) => {
    return language.findIndex((item) => item.id === id);
  };

  const setActiveToFalse = () => {
    language.map((item) => (item.active = false));
  };

  const changeActiveLanguage = (id) => {
    const indexActiveElement = indexByElementId(id);
    setActiveToFalse();
    const updatedLanguage = [...language];
    updatedLanguage[indexActiveElement].active =
      !updatedLanguage[indexActiveElement].active;
    setLanguage(updatedLanguage);
  };

  return (
    <>
      <div className="container">
        <ButtonList
          data={language}
          handleShowedLanguage={changeActiveLanguage}
        />
        <Card data={language} />
      </div>
    </>
  );
}
