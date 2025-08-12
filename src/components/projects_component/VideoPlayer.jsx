import { Download, Volume2, VolumeOff } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export default function VideoPlayer({
  src,
  poster,
  title = "Video",
  captions = [],
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      setProgress((v.currentTime / (v.duration || 1)) * 100);
    };

    const onLoadedMeta = () => {
      setDuration(v.duration || 0);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadedmetadata", onLoadedMeta);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadedmetadata", onLoadedMeta);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const handleProgressClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    const v = videoRef.current;
    if (!v || !v.duration) return;
    v.currentTime = pct * v.duration;
    setProgress(pct * 100);
  };

  const formatTime = (s) => {
    if (!isFinite(s)) return "00:00";
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${mm}:${ss}`;
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!isFullscreen) {
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) await document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    } else if (e.code === "ArrowRight") {
      videoRef.current.currentTime = Math.min(
        videoRef.current.currentTime + 5,
        videoRef.current.duration || 0
      );
    } else if (e.code === "ArrowLeft") {
      videoRef.current.currentTime = Math.max(
        videoRef.current.currentTime - 5,
        0
      );
    } else if (e.key.toLowerCase() === "m") {
      setIsMuted((s) => !s);
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="max-w-4xl mx-auto overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={title}
    >
      <div
        className="relative border bg-black/40 border-gray-300 rounded-xl  overflow-hidden"
        onMouseEnter={() => {
          setIsAppearing(true);
        }}
        onMouseLeave={() => {
          setIsAppearing(false);
        }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-auto aspect-video "
          preload="metadata"
          controls={false}
        >
          {captions.map((c, idx) => (
            <track
              key={idx}
              kind="subtitles"
              src={c.src}
              srcLang={c.srclang}
              label={c.label}
              default={c.default}
            />
          ))}
        </video>

        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto flex items-center justify-center w-20 h-20 rounded-full bg-black/60 backdrop-blur transition hover:scale-105"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.518-3.76A1 1 0 006 8.298v7.404a1 1 0 001.234.97l6.518-1.652A1 1 0 0014.752 11.168z"
              />
            </svg>
          </button>
        )}
        {isAppearing && !isPlaying && (
          <div className="absolute top-2 left-3 px-3 py-1 rounded-full bg-black/40 text-white text-sm font-medium backdrop-blur">
            {title}
          </div>
        )}
        {isAppearing && (
          <div className="px-4 py-3 absolute bottom-0 right-0 w-full bg-black/60">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-10 h-10 rounded-md bg-white/6 hover:bg-white/10 transition"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 4h3v12H6zM11 4h3v12h-3z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                  </svg>
                )}
              </button>

              <div className="text-sm text-gray-200 w-20">
                {formatTime(
                  (videoRef.current && videoRef.current.currentTime) || 0
                )}{" "}
                / {formatTime(duration)}
              </div>

              <div className="flex-1">
                <div
                  className="h-2 rounded-full bg-white/10 cursor-pointer"
                  onClick={handleProgressClick}
                  role="slider"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                >
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted((s) => !s)}
                  className="w-9 h-9 rounded-md bg-white/6 hover:bg-white/10 flex items-center justify-center text-white"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeOff className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    setVolume(v);
                    if (v === 0) setIsMuted(true);
                    else setIsMuted(false);
                  }}
                  aria-label="Volume"
                />
              </div>

              <button
                onClick={toggleFullscreen}
                className="w-9 h-9 rounded-md bg-white/6 hover:bg-white/10 flex items-center justify-center ml-2"
                aria-label="Fullscreen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h3a1 1 0 110 2H5v2a1 1 0 11-2 0V4zm14 0v3a1 1 0 11-2 0V5h-2a1 1 0 110-2h3a1 1 0 011 1zM4 16v-3a1 1 0 112 0v2h2a1 1 0 110 2H5a1 1 0 01-1-1zm12 0h-3a1 1 0 110-2h2v-2a1 1 0 112 0v3a1 1 0 01-1 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <a
                  href={src}
                  download
                  className="rounded-md bg-white/6 hover:bg-white/10 flex items-center justify-center w-9 h-9"
                >
                  <Download className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
