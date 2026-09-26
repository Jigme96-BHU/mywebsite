"use client";

import { useState } from "react";
import ParallaxShot from "./ParallaxShot";

// A plot's image frame: the static capture by default, and —
// on request — the live site in a sandboxed iframe. Nothing
// third-party loads until the visitor asks for it.
export default function PlotShot({
  src,
  name,
  url,
  embeddable,
  sizes,
  className = "",
}: {
  src: string;
  name: string;
  url: string;
  embeddable: boolean;
  sizes?: string;
  className?: string;
}) {
  const [live, setLive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const host = new URL(url).host.replace(/^www\./, "");

  const close = () => {
    setLive(false);
    setLoaded(false);
  };

  // Caller provides positioning via className; the frame
  // sits below the card's stretched link (z-10), which opens
  // the live site; the preview UI sits above it (z-20).
  return (
    <div className={className}>
      <ParallaxShot src={src} name={name} sizes={sizes} className="absolute inset-0" />

      {live && (
        <div data-cursor="none" className="absolute inset-0 z-20 flex flex-col bg-ink">
          <div className="gw-label flex items-center justify-between gap-3 border-b border-paper/15 bg-ink px-3 py-2 text-paper/60">
            <span className="truncate">
              <span className="mr-2 text-survey">{loaded ? "● Live" : "Loading…"}</span>
              {host}
            </span>
            <span className="flex shrink-0 gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper no-underline hover:text-survey"
              >
                Open ↗<span className="sr-only"> (opens in new tab)</span>
              </a>
              <button type="button" onClick={close} className="text-paper hover:text-survey">
                Close ✕
              </button>
            </span>
          </div>
          <iframe
            src={url}
            title={`Live preview of the ${name} website`}
            onLoad={() => setLoaded(true)}
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            className={`w-full flex-1 border-0 bg-paper transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      )}

      {embeddable && !live && (
        <button
          type="button"
          onClick={() => setLive(true)}
          className="gw-label absolute bottom-3 right-3 z-20 bg-ink px-4 py-2.5 text-paper transition-colors duration-300 hover:bg-survey hover:text-ink"
        >
          Preview live ↗<span className="sr-only"> — {name}</span>
        </button>
      )}
    </div>
  );
}
