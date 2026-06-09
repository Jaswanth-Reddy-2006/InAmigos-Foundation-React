import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    
    // Add toast to state
    setToasts((prev) => [...prev, { id, message, visible: false }]);
    
    // Trigger transition entry
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: true } : t))
      );
    }, 50);

    // Trigger transition exit
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: false } : t))
      );
      
      // Remove toast from DOM after transition out finishes
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 400);
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container" id="toast-container">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${toast.visible ? 'show' : ''}`}
          >
            <span className="toast-icon">
              <i className="fa-solid fa-circle-check"></i>
            </span>
            <span className="toast-msg">{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
