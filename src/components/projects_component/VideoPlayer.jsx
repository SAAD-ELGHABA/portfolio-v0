import { Download, Volume2, VolumeOff } from "lucide-react";
import React, { useRef, useState} from "react";

export default function VideoPlayer({
  src,
  title = "Video",
}) {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);

  const getEmbedUrl = (url) => {
    try {
      if (url?.includes("youtu.be")) {
        const id = url.split("youtu.be/")[1];
        return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
      } else if (url.includes("watch?v=")) {
        const id = url.split("watch?v=")[1];
        return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
      }
      return url;
    } catch {
      return url;
    }
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

  return (
    <div
      ref={containerRef}
      className="max-w-4xl mx-auto overflow-hidden"
      aria-label={title}
    >
      <div
        className="relative border bg-black/40 border-gray-300 rounded-xl overflow-hidden"
        onMouseEnter={() => setIsAppearing(true)}
        onMouseLeave={() => setIsAppearing(false)}
      >
        <iframe
          src={getEmbedUrl(src)}
          title={title}
          className="w-full aspect-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </div>
  );
}
