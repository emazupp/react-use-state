import ButtonItem from "./ButtonItem";

export default function ButtonList({ data, handleShowedLanguage }) {
  return (
    <>
      <div className="button-container">
        {data.map((item) => (
          <ButtonItem
            key={item.id}
            id={item.id}
            title={item.title}
            active={item.active}
            handleShowedLanguage={handleShowedLanguage}
          />
        ))}
      </div>
    </>
  );
}
