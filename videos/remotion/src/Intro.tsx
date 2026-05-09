import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const titleOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [10, 30], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [40, 80], [0, 720], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleOpacity = interpolate(frame, [70, 95], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tagOpacity = interpolate(frame, [110, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 1],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const blobRotate = (frame * 0.6) % 360;
  const ringRotate = (frame * 1.2) % 360;

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #0b0f1a 0%, #131934 50%, #0b0f1a 100%)",
        fontFamily:
          'Inter, "SF Pro Display", system-ui, -apple-system, sans-serif',
        color: "white",
        opacity: fadeOut,
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-220px",
          left: "-220px",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.65), transparent 70%)",
          filter: "blur(90px)",
          transform: `rotate(${blobRotate}deg)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-220px",
          right: "-220px",
          width: 720,
          height: 720,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.55), transparent 70%)",
          filter: "blur(90px)",
          transform: `rotate(${-blobRotate}deg)`,
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />

      {/* Decorative rotating ring */}
      <svg
        viewBox="0 0 400 400"
        style={{
          position: "absolute",
          top: 60,
          right: 60,
          width: 220,
          height: 220,
          opacity: 0.55,
          transform: `rotate(${ringRotate}deg)`,
        }}
      >
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="2"
          strokeDasharray="6 12"
        />
        <circle cx="350" cy="200" r="8" fill="#06b6d4" />
      </svg>

      {/* Center content */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 80px",
        }}
      >
        <h1
          style={{
            fontSize: 108,
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            background:
              "linear-gradient(120deg, #6366f1, #06b6d4 50%, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Phithatsanan
        </h1>

        <div
          style={{
            width: lineWidth,
            height: 3,
            margin: "20px 0",
            borderRadius: 2,
            background:
              "linear-gradient(90deg, #6366f1, #06b6d4 50%, #ec4899)",
          }}
        />

        <p
          style={{
            fontSize: 34,
            margin: 0,
            opacity: subtitleOpacity,
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.92)",
            fontWeight: 500,
          }}
        >
          Application Analyst &middot; Admin Support
        </p>

        <p
          style={{
            fontSize: 22,
            marginTop: 24,
            opacity: tagOpacity,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(203, 213, 225, 0.85)",
          }}
        >
          Chanwanich &nbsp;&middot;&nbsp; KMUTT alumnus
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
