import { useState, useEffect, useRef } from "react";

export default function ProjectPreview({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  const startImageCycle = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
  };

  const stopImageCycle = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCurrentImage(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="relative w-full max-w-[450px] h-[250px] md:h-[300px] border rounded-md overflow-hidden"
      onMouseEnter={startImageCycle}
      onMouseLeave={stopImageCycle}
    >
      <img
        key={images[currentImage]}
        src={images[currentImage]}
        alt="Project Preview"
        className="w-full h-full object-cover transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  );
}
