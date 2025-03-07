export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center">
    <section className="flex flex-col justify-center items-center bg-transparent">
      <h2 className="text-4xl font-bold px-4 py-2 text-[#BFEDC1] bg-[#0D1317]/70 rounded-md shadow-md">
        Hello
      </h2>
    </section>

      <div className="mt-6 max-w-2xl text-left mb-4">
        <p className="font-bold text-lg">
          My name is Stephen Kryworuchka, a full‑stack web developer and dev‑ops technician. I also hold an Autodesk AutoCAD certification (2018–2019) from the Manitoba Institute of Trades and Technology.
        </p>

        <p className="mt-6 font-bold text-lg">
          In addition to my interest in web development, I am also interested in IoT, networking, and 3D printing.
        </p>
        <div className="w-full max-w-2xl border-t-2 border-dotted border-gray-500 my-14"></div>
      </div>
    </section>
  );
}
