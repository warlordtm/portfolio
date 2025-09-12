"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // apply theme to <html>
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-800 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-900" />
      )}
    </button>
  );
}
