export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      {/* Header section */}
      <section className="flex flex-col items-center bg-transparent mt-2">
        <h2 className="text-4xl font-bold px-3 py-2 text-[#BFEDC1] bg-[#0D1317]/25 mb-3 mt-8 rounded-md shadow-md">
          Hello
        </h2>
      </section>
      {/* Centered container for text and dotted line */}
      <div className="w-full max-w-xl mx-auto mt-6 mb-4">
        {/* Text is left-aligned inside this container */}
        <div className="text-left">
          <p className="font-bold text-md">
            My name is Stephen Kryworuchka, a full‑stack web developer and dev‑ops technician. I also hold an Autodesk AutoCAD certification (2018–2019) from the Manitoba Institute of Trades and Technology.
          </p>
          <p className="mt-6 font-bold text-lg">
            In addition to my interest in web development, I am also interested in IoT, networking, and 3D printing.
          </p>
        </div>
        {/* Dotted line spans the full width of the container */}
        <div className="w-full border-t-2 border-dotted border-gray-500 my-16 custom-dotted"></div>
      </div>
    </section>
  );
}
