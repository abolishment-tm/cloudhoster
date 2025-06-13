// File: src/components/Tooltip/TooltipModal.tsx
import React from 'react';
import './TooltipModal.css';

export interface TooltipModalProps {
  title: string;
  content: string;
  onClose: () => void;
  positionMode?: 'overlay' | 'modal'; // ini penting
}

const TooltipModal: React.FC<TooltipModalProps> = ({
  title,
  content,
  onClose,
  positionMode = 'modal',
}) => {
  return (
    <div
      className={`tooltip-modal-container ${
        positionMode === 'modal' ? 'fixed-mode' : ''
      }`}
    >
      <div className="tooltip-modal-box">
        <button className="tooltip-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="tooltip-modal-title">{title}</div>
        <div className="tooltip-modal-content">{content}</div>
      </div>
    </div>
  );
};

export default TooltipModal;
