import { useState, useEffect, useMemo } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endTime?: Date;
  urgent?: boolean;
}

export const CountdownTimer = ({ endTime, urgent = false }: CountdownTimerProps) => {
  // Set a fixed end time on first render
  const targetEndTime = useMemo(() => {
    return endTime || new Date(Date.now() + 24 * 60 * 60 * 1000);
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const end = targetEndTime.getTime();
    const difference = end - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg backdrop-blur border ${
      urgent 
        ? "bg-red-500/10 border-red-500/30 animate-pulse" 
        : "bg-primary/10 border-primary/30"
    }`}>
      <Clock className={`w-5 h-5 ${urgent ? "text-red-400" : "text-primary"}`} />
      <div className="flex items-center gap-2 font-mono text-lg font-bold">
        <div className="flex flex-col items-center">
          <span className={urgent ? "text-red-400" : "text-primary"}>{formatNumber(timeLeft.hours)}</span>
          <span className="text-xs text-muted-foreground">hrs</span>
        </div>
        <span className={urgent ? "text-red-400" : "text-primary"}>:</span>
        <div className="flex flex-col items-center">
          <span className={urgent ? "text-red-400" : "text-primary"}>{formatNumber(timeLeft.minutes)}</span>
          <span className="text-xs text-muted-foreground">min</span>
        </div>
        <span className={urgent ? "text-red-400" : "text-primary"}>:</span>
        <div className="flex flex-col items-center">
          <span className={urgent ? "text-red-400" : "text-primary"}>{formatNumber(timeLeft.seconds)}</span>
          <span className="text-xs text-muted-foreground">sec</span>
        </div>
      </div>
    </div>
  );
};
