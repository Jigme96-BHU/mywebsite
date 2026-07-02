import { ImageResponse } from "next/og";
import { AGENCY } from "@/lib/data";

export const runtime = "edge";
export const alt = "Sprout Web — websites from the ground up";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12130F",
          color: "#EDE9E3",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 4,
            color: "#8A867B",
          }}
        >
          <span>SPROUT WEB — SITE PLAN 001</span>
          <span style={{ color: "#FF4D00" }}>{AGENCY.coords}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 130,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          <span>FROM THE</span>
          <span style={{ display: "flex", alignItems: "center", gap: 24 }}>
            GROUND UP
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 28,
                background: "#FF4D00",
                marginTop: 24,
              }}
            />
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8A867B" }}>
          Websites for small business — designed, built, and run from Canberra.
        </div>
      </div>
    ),
    size
  );
}
