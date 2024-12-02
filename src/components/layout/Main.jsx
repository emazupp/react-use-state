import ButtonList from "../ButtonList/ButtonList";
import Card from "../Card/Card";

export default function Main({ data }) {
  return (
    <>
      <div className="container">
        <ButtonList data={data} />
        <Card data={data} />
      </div>
    </>
  );
}
