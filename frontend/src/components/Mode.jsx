import { useState, useEffect } from "react";
import "../style/header.css"

export default function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <button className="theme" onClick={() => setDarkMode(prev => !prev)}>
      Сменить цвет
    </button>
  );
}
