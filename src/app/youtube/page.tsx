"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { videos } from "@/data/videos";
import { useState, useMemo } from "react";
import { FaCopy, FaCheck, FaYoutube, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function YouTubePage() {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedVideos, setExpandedVideos] = useState<Set<number>>(new Set());

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const filteredVideos = useMemo(() => {
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleVideo = (index: number) => {
    const newExpanded = new Set(expandedVideos);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedVideos(newExpanded);
  };

  const CodeBlock = ({ code, language, copyKey }: { code: string; language: string; copyKey: string }) => (
    <div className="relative">
      <div className="flex items-center justify-between bg-gray-800 dark:bg-gray-900 px-4 py-2 rounded-t-lg border-b border-gray-700">
        <span className="text-sm text-gray-300 font-medium">{language}</span>
        <button
          onClick={() => copyToClipboard(code, copyKey)}
          className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors duration-200 cursor-pointer"
        >
          {copiedStates[copyKey] ? <FaCheck className="text-green-400" /> : <FaCopy />}
          {copiedStates[copyKey] ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 dark:bg-black p-4 rounded-b-lg overflow-x-auto text-sm">
        <code className="text-gray-100 dark:text-gray-200">{code}</code>
      </pre>
    </div>
  );

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <NavBar />
      <div className="pt-20 pb-10 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          YouTube Videos Source Code
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Here you can find the complete source code for all my YouTube videos. Each tutorial includes HTML, CSS, and JavaScript files that you can copy and use in your own projects!
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredVideos.map((video, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Video Header */}
              <button
                onClick={() => toggleVideo(index)}
                className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {video.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {video.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaYoutube />
                      Watch
                    </a>
                    {expandedVideos.has(index) ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              {expandedVideos.has(index) && (
                <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-6 pt-6">
                    <CodeBlock code={video.html} language="index.html" copyKey={`html-${index}`} />
                    <CodeBlock code={video.css} language="zencode.css" copyKey={`css-${index}`} />
                    <CodeBlock code={video.js} language="zencode.js" copyKey={`js-${index}`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No videos found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}