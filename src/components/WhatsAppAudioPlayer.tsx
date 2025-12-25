import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface WhatsAppAudioPlayerProps {
  audioUrl: string;
  duration?: string;
}

export const WhatsAppAudioPlayer = ({ audioUrl, duration = "0:17" }: WhatsAppAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setAudioDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
      setIsPlaying(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = audioDuration ? (currentTime / audioDuration) * 100 : 0;

  return (
    <div className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-2 max-w-[250px]">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      <button
        onClick={togglePlay}
        className="flex-shrink-0 w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-colors flex items-center justify-center"
        aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-white fill-white" />
        ) : (
          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
        )}
      </button>

      <div className="flex-1 flex items-center gap-2">
        {/* Waveform animation */}
        <div className="flex items-center gap-0.5 flex-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`w-0.5 bg-gray-400 rounded-full transition-all ${
                isPlaying ? "animate-pulse" : ""
              }`}
              style={{
                height: `${Math.random() * 12 + 8}px`,
                animationDelay: `${i * 50}ms`,
                opacity: progress > (i / 20) * 100 ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
          {isPlaying ? formatTime(currentTime) : duration}
        </span>
      </div>
    </div>
  );
};
