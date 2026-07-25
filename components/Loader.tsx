"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hidden ? "hide" : ""}>
      <div className="loader-mark">TS · Loading Intelligence</div>
      <div className="loader-bar">
        <span></span>
      </div>
    </div>
  );
}
