// File: src/components/TooltipModal.tsx
import React from 'react';
import './TooltipModal.css';

interface TooltipModalProps {
  visible: boolean;
  title: string;
  content: string;
}

const TooltipModal: React.FC<TooltipModalProps> = ({ visible, title, content }) => {
  if (!visible) return null;

  return (
    <div className="tooltip-panel absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50">
      <div className="tooltip-panel-inner" onClick={(e) => e.stopPropagation()}>
        <h3 className="tooltip-panel-title">{title}</h3>
        <p className="tooltip-panel-content">{content}</p>
      </div>
    </div>
  );
};

export default TooltipModal;