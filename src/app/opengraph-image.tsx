import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 75,
        color: "#262330",
      }}
    >
      <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: 4 }}>
        ISAAC VELIZ.
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 94, fontFamily: "serif", lineHeight: 1 }}>
          Software con
        </div>
        <div
          style={{
            fontSize: 94,
            fontFamily: "serif",
            color: "#694e99",
            lineHeight: 1,
          }}
        >
          propósito.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>INGENIERO DE SOFTWARE · DESARROLLO FULL STACK</span>
        <span>POTOSÍ, BOLIVIA</span>
      </div>
    </div>,
    size,
  );
}
