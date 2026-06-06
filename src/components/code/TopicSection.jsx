import { useState, lazy, Suspense } from "react";

import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { useTheme } from "../../context/ThemeContext";

const SyntaxHighlighter = lazy(async () => {
  const [{ LightAsync }, { default: javascript }] = await Promise.all([
    import("react-syntax-highlighter"),
    import("react-syntax-highlighter/dist/esm/languages/prism/javascript"),
  ]);

  LightAsync.registerLanguage("javascript", javascript);

  return {
    default: LightAsync,
  };
});

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
          <Suspense
            fallback={
              <div className="code-loading">Loading code example...</div>
            }
          >
            <SyntaxHighlighter
              language="javascript"
              style={theme === "dark" ? oneDark : oneLight}
              showLineNumbers
              wrapLongLines
            >
              {section.rawCode}
            </SyntaxHighlighter>
          </Suspense>
        </div>
      )}
    </section>
  );
}
