export default function ButtonItem({
  id,
  title,
  active,
  handleShowedLanguage,
}) {
  const activeClassButton = active ? "active" : "";

  return (
    <button
      className={activeClassButton}
      onClick={() => handleShowedLanguage(id)}
      id={id}
    >
      {title}
    </button>
  );
}
