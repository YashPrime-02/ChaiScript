import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(Math.round(percentage), 100));
    };

    window.addEventListener("scroll", calculateProgress);

    calculateProgress();

    return () => {
      window.removeEventListener("scroll", calculateProgress);
    };
  }, []);

  const circumference = 2 * Math.PI * 45;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="reading-progress">
      <svg viewBox="0 0 100 100">
        <circle className="progress-bg" cx="50" cy="50" r="42" />
        <circle
          className="progress-fill"
          cx="50"
          cy="50"
          r="42"
          strokeDasharray="263.89" /* ≈ 2 * PI * 42 */
          strokeDashoffset="calc(263.89 - (263.89 * progress) / 100)"
        />
      </svg>
      <span>{progress}%</span>
    </div>
  );
}
