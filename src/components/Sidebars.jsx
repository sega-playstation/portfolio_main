import React, { useRef, useEffect } from "react";
import logoPoints from "../assets/logoPoints.json";
import { Pane } from "tweakpane"; 

export default function Sidebars() {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  useEffect(() => {
    const PARAMS = {
      cols: 40,
      rows: 80,
      freq: 0.004,
      amp: 1.0,
      scaleMin: 3.6,
      scaleMax: 10.0,
      waveSpeed: 0.009,
      waveOpacity: 0.015,
      strokeAlpha: 1.0,
      logoRevealThreshold: 0.48,
      logoStrokeScale: 2.0,
      reverseLogoPhase: false,
      randomizeWave: true,
      waveColor: "rgba(100, 120, 160, 0.45)",
      logoColor: "rgba(115, 79, 219, 0.80)",
      logoOffsetX: 0,
      logoOffsetY: -90,
      logoFadeSpeed: 0.2,
    };

    /* Tweakpane Controls */

    // const pane = new Pane({
    //   title: "Sidebar Tuner",
    //   container: document.getElementById("pane-root"),
    // });

    // pane.addBinding(PARAMS, "cols", { min: 4, max: 40, step: 1 });
    // pane.addBinding(PARAMS, "rows", { min: 4, max: 80, step: 1 });
    // pane.addBinding(PARAMS, "freq", { min: 0.001, max: 0.02, step: 0.001 });
    // pane.addBinding(PARAMS, "amp", { min: 0, max: 1, step: 0.05 });
    // pane.addBinding(PARAMS, "scaleMin", { min: 0.5, max: 5, step: 0.1 });
    // pane.addBinding(PARAMS, "scaleMax", { min: 1, max: 10, step: 0.5 });
    // pane.addBinding(PARAMS, "waveSpeed", { min: 0.001, max: 0.1, step: 0.001 });
    // pane.addBinding(PARAMS, "waveOpacity", { min: 0, max: 0.2, step: 0.005 });
    // pane.addBinding(PARAMS, "strokeAlpha", { min: 0, max: 1, step: 0.01 });
    // pane.addBinding(PARAMS, "logoRevealThreshold", { min: 0, max: 1, step: 0.01 });
    // pane.addBinding(PARAMS, "logoStrokeScale", { min: 0.5, max: 3.0, step: 0.1 });
    // pane.addBinding(PARAMS, "reverseLogoPhase");
    // pane.addBinding(PARAMS, "randomizeWave");
    // pane.addBinding(PARAMS, "waveColor");
    // pane.addBinding(PARAMS, "logoColor");
    // pane.addBinding(PARAMS, "logoOffsetX", { min: -100, max: 100, step: 1 });
    // pane.addBinding(PARAMS, "logoOffsetY", { min: -100, max: 100, step: 1 });
    // pane.addBinding(PARAMS, "logoFadeSpeed", { min: 0.001, max: 0.5, step: 0.001 });

    // window.__sidebarPane = pane;

    const canvasList = [
      { ref: leftCanvasRef },
      { ref: rightCanvasRef },
    ];

    const logoFades = new Array(logoPoints.length).fill(0);

    canvasList.forEach(({ ref }) => {
      const canvas = ref.current;
      const ctx = canvas.getContext("2d");

      const width = 200;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      logoPoints.forEach(p => {
        if (p.x < minX) minX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.x > maxX) maxX = p.x;
        if (p.y > maxY) maxY = p.y;
      });

      const logoW = maxX - minX;
      const logoH = maxY - minY;
      const padding = 0.1;
      const scale = Math.min(
        (1 - padding * 2) * width / logoW,
        (1 - padding * 2) * height / logoH
      );
      const offsetX = (width - logoW * scale) / 2 - minX * scale + PARAMS.logoOffsetX;
      const offsetY = (height - logoH * scale) / 2 - minY * scale + PARAMS.logoOffsetY;

      const animate = (frame = 0) => {
        const {
          cols, rows, freq, amp, scaleMin, scaleMax,
          waveSpeed, waveOpacity, strokeAlpha,
          logoRevealThreshold, logoStrokeScale,
          reverseLogoPhase, randomizeWave,
          waveColor, logoColor, logoFadeSpeed
        } = PARAMS;

        const cellW = width / cols;
        const cellH = height / rows;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = `rgba(255,255,255,${waveOpacity})`;
        ctx.fillRect(0, 0, width, height);

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * cellW + cellW / 2;
            const y = row * cellH + cellH / 2;

            const n = Math.sin((x + y) * freq + frame * waveSpeed);
            const angle = n * Math.PI * amp;
            const randomScaleOffset = randomizeWave ? (Math.random() - 0.5) * 0.5 : 0;
            const scale = ((n + 1) / 2) * (scaleMax - scaleMin) + scaleMin + randomScaleOffset;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.strokeStyle = waveColor;
            ctx.lineWidth = scale;
            ctx.beginPath();
            ctx.moveTo(-cellW * 0.3, 0);
            ctx.lineTo(cellW * 0.3, 0);
            ctx.stroke();
            ctx.restore();
          }
        }

        logoPoints.forEach(({ x, y }, i) => {
          const px = x * scale + offsetX;
          const py = height - (y * scale + offsetY);

          const waveInput = reverseLogoPhase ? -1 * (px + py) : px + py;
          const n = Math.sin(waveInput * freq + frame * waveSpeed);
          const t = (n + 1) / 2;

          if (t < logoRevealThreshold) {
            logoFades[i] = 1.0;
          } else {
            logoFades[i] = Math.max(0, logoFades[i] - logoFadeSpeed);
          }

          if (logoFades[i] > 0.01) {
            const angle = n * Math.PI * amp;
            const randomScaleOffset = randomizeWave ? (Math.random() - 0.5) * 0.5 : 0;
            const strokeWidth = (((t) * (scaleMax - scaleMin)) + scaleMin + randomScaleOffset) * logoStrokeScale;

            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(angle);
            ctx.strokeStyle = logoColor;
            ctx.lineWidth = strokeWidth;
            ctx.globalAlpha = logoFades[i];
            ctx.beginPath();
            ctx.moveTo(-cellW * 0.3, 0);
            ctx.lineTo(cellW * 0.3, 0);
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.restore();
          }
        });

        requestAnimationFrame(() => animate(frame + 1));
      };

      animate();
    });
  }, []);

  return (
    <>
      <div id="pane-root" style={{
        position: "fixed",
        top: "60px",
        right: "10px",
        zIndex: 9999,
      }} />
  
      <canvas
        ref={leftCanvasRef}
        className="sidebar-canvas"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "200px",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
  
      <canvas
        ref={rightCanvasRef}
        className="sidebar-canvas"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "200px",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </>
  );  
}
