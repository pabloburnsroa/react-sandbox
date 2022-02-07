import './Title.css';

export default function Title({ title, subtitle }) {
  return (
    <div className="title-block">
      <h1 className="title">Mario Kingdom, {title}</h1>
      <br />
      <h2 className="subtitle">
        All the latest events in the Mario kingdom, {subtitle}
      </h2>
    </div>
  );
}
