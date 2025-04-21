import React, { useRef, useEffect } from "react";
// import { Pane } from "tweakpane"; // Optional: comment this to remove dependency

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
    };

    // COMMENTED: Tweakpane setup (can restore later)
    /*
    const pane = new Pane({
      title: "Sidebar Tuner",
      container: document.getElementById("pane-root"),
    });

    pane.addBinding(PARAMS, "cols", { min: 4, max: 40, step: 1 });
    pane.addBinding(PARAMS, "rows", { min: 4, max: 80, step: 1 });
    pane.addBinding(PARAMS, "freq", { min: 0.001, max: 0.02, step: 0.001 });
    pane.addBinding(PARAMS, "amp", { min: 0, max: 1, step: 0.05 });
    pane.addBinding(PARAMS, "scaleMin", { min: 0.5, max: 5, step: 0.1 });
    pane.addBinding(PARAMS, "scaleMax", { min: 1, max: 10, step: 0.5 });

    window.__sidebarPane = pane;
    */

    const canvasList = [
      { ref: leftCanvasRef },
      { ref: rightCanvasRef },
    ];

    canvasList.forEach(({ ref }) => {
      const canvas = ref.current;
      const ctx = canvas.getContext("2d");

      const width = 200;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      const animate = (frame = 0) => {
        const { cols, rows, freq, amp, scaleMin, scaleMax } = PARAMS;

        const cellW = width / cols;
        const cellH = height / rows;

        const noise2D = (x, y) => Math.sin((x + y) * freq);

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.fillRect(0, 0, width, height);

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * cellW + cellW / 2;
            const y = row * cellH + cellH / 2;

            const n = noise2D(x + frame * 4, y);
            const angle = n * Math.PI * amp;
            const scale = ((n + 1) / 2) * (scaleMax - scaleMin) + scaleMin;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.strokeStyle = "rgba(0, 100, 200, 0.25)";
            ctx.lineWidth = scale;
            ctx.beginPath();
            ctx.moveTo(-cellW * 0.3, 0);
            ctx.lineTo(cellW * 0.3, 0);
            ctx.stroke();
            ctx.restore();
          }
        }

        requestAnimationFrame(() => animate(frame + 1));
      };

      animate();
    });
  }, []);

  return (
    <>
      {/* Tweakpane container - hidden for now */}
      {/* <div id="pane-root" style={{
        position: "fixed",
        top: "60px",
        right: "10px",
        zIndex: 9999,
      }} /> */}

      {/* Left Sidebar Canvas */}
      <canvas
        ref={leftCanvasRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Right Sidebar Canvas */}
      <canvas
        ref={rightCanvasRef}
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
