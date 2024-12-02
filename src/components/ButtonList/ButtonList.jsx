import ButtonItem from "./ButtonItem/ButtonItem";

export default function ButtonList({ data }) {
  return (
    <>
      <div className="button-container">
        {data.map((item) => (
          <ButtonItem key={item.id} id={item.id} title={item.title} />
        ))}
      </div>
    </>
  );
}
