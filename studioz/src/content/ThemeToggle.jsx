// ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
        className="theme-toggle"
      onClick={toggleTheme}
    //   style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {theme === "dark" ? (
        <FaSun color="yellow" size={24} />
      ) : (
        <FaMoon color="black" size={24} />
      )}
    </button>
  );
}

export default ThemeToggle;
