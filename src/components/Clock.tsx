"use client";

import { useEffect, useState } from "react";
import { AGENCY } from "@/lib/data";

// Live local-time readout for the footer:
// "14:32:07 AEST — elev. 578 m"
export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-AU", {
      timeZone: AGENCY.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    });
    const update = () => setTime(fmt.format(new Date()).toUpperCase());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>
      {time ?? "--:--:--"} — elev. {AGENCY.elevation} m
    </span>
  );
}
