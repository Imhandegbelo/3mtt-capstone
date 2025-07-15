const Modal = ({ isOpen, onClose, children }) => {
  // if (!isOpen) return null;

  return (
    <div className="fixed flex items-center justify-center top-0 h-screen w-screen z-50 bg-black/30" onClick={onClose}>
      <div className="bg-white max-w-md p-3 rounded-md" onClick={(e) => e.stopPropagation()}>
        <button className="p-2 text-white" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
