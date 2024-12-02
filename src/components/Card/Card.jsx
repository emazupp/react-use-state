export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card-title">{data[0].title}</div>
      <div className="card-body">{data[0].description}</div>
    </div>
  );
}
