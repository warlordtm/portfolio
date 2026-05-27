"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Full-stack Developer",
  "Next.js Expert",
  "UI/UX Enthusiast",
  "React Architect",
  "Open Source Builder",
];

const TYPING_SPEED   = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER    = 1800;

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        TYPING_SPEED
      );
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        DELETING_SPEED
      );
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span
        className="inline-block w-0.5 h-[1em] ml-1 align-middle bg-violet-400 animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}
