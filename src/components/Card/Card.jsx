export default function Card({ data }) {
  const findActiveElement = () => {
    return data.find((item) => item.active);
  };

  const activeElement = findActiveElement();

  return (
    <>
      {activeElement ? (
        <div className="card">
          <div className="card-title">{activeElement.title}</div>
          <div className="card-body">{activeElement.description}</div>
        </div>
      ) : (
        <div className="card">Nessun linguaggio selezionato</div>
      )}
    </>
  );
}
