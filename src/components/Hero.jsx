export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold bg-primaryText px-4 text-primaryBg">
        Hello
      </h1>

      <div className="mt-6 max-w-2xl text-left">
        <p className="font-bold text-lg">
          My name is Stephen Kryworuchka, a full‑stack web developer and dev‑ops technician. I also hold an Autodesk AutoCAD certification (2018–2019) from the Manitoba Institute of Trades and Technology.
        </p>

        <p className="mt-6 font-bold text-lg">
          In addition to my interest in web development, I am also interested in IoT, networking, music production software, and 3D printing.
        </p>

        <p className="mt-10 text-lg">
          --------------------------------------------------------------
        </p>
      </div>
    </section>
  );
}
