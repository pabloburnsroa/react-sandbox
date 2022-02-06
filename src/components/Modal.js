import './Modal.css';

export default function Modal({ children, close }) {
  return (
    <div className="modal-backdrop">
      {/* We can access props.children and pass  */}
      <div className="modal">{children}</div>
      <button onClick={close}>Close</button>
    </div>
  );
}
