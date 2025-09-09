"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Zencode. All rights reserved.</p>
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/warlordtm" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/bamisaye-godwin" target="_blank"><FaLinkedin /></a>
          <a href="https://twitter.com/zen__code" target="_blank"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
