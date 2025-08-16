import "./ConfirmModal.css";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  message,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-box">
          <p>{message}</p>
          <div className="modal-actions">
            <button className="confirm-btn" onClick={onConfirm}>
              Yes
            </button>
            <button className="cancel-btn" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
