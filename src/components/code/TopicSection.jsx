import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from "../../context/ThemeContext";

export default function TopicSection({ section, index }) {
  const { theme } = useTheme();

  const [copied, setCopied] = useState(false);

  const [expanded, setExpanded] = useState(index === 0);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(section.rawCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <section id={`section-${index}`} className="topic-section">
      <div className="topic-section__header">
        <h2
          className="topic-section__title"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "▼" : "▶"} {section.title}
        </h2>

        <div className="topic-section__actions">
          {section.sourceFile && (
            <span className="topic-section__source">{section.sourceFile}</span>
          )}

          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "✅ Copied" : "📋 Copy"}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="topic-section__body">
          <SyntaxHighlighter
            language="javascript"
            style={theme === "dark" ? oneDark : oneLight}
            showLineNumbers
            wrapLongLines
          >
            {section.rawCode}
          </SyntaxHighlighter>
        </div>
      )}
    </section>
  );
}
