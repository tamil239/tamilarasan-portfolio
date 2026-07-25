"use client";

import React, { createContext, useContext, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type ToastContextType = {
  showToast: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType>({
  showToast: () => {}
});

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMsg && (
        <div
          className="glass"
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 99999,
            padding: "12px 20px",
            borderRadius: "16px",
            border: "1px solid var(--glass-border)",
            background: "rgba(17,21,30,0.92)",
            backdropFilter: "blur(20px)",
            color: "var(--text)",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.6), 0 0 20px rgba(16,185,129,0.2)",
            animation: "float1 0.3s ease-out forwards"
          }}
        >
          <CheckCircle2 size={18} style={{ color: "var(--accent)" }} />
          <span>{toastMsg}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}
