import './Modal.css';

export default function Modal({ children, close, isSalesModal }) {
  return (
    <div className="modal-backdrop">
      {/* We can access props.children and pass  */}
      <div
        className="modal"
        style={{
          border: '4px solid',
          borderColor: isSalesModal ? '#ff4500' : '#555',
        }}
      >
        {children}
        <button onClick={close} className={isSalesModal ? 'sales-btn' : ''}>
          Close
        </button>
      </div>
    </div>
  );
}
