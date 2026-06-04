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
      <svg width="110" height="110">
        <circle cx="55" cy="55" r="45" className="progress-bg" />

        <circle
          cx="55"
          cy="55"
          r="45"
          className="progress-fill"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <span>{progress}%</span>
    </div>
  );
}
