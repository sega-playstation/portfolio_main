export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      {/* Header section */}
      <section className="flex flex-col items-center bg-transparent mt-2">
        <h2 className="text-4xl font-bold px-3 py-2 text-[#BFEDC1] bg-[#0D1317]/25 mb-3 mt-8 rounded-md shadow-md">
          Hello
        </h2>
      </section>

      <div className="w-full max-w-xl mx-auto mt-6 mb-4 px-4 sm:px-6 md:px-8">
        <div className="text-left">
          <p className="font-bold text-md">
            My name is Stephen Kryworuchka — a full-stack web developer and DevOps technician with a diploma in Business Information Technology from Red River College Polytechnic. I also hold an Autodesk AutoCAD certification (2018–2019) from the Manitoba Institute of Trades and Technology.
          </p>

          <p className="mt-6 font-bold text-md">
            I manage infrastructure and deployment for production web apps, including provisioning Jenkins and maintaining CI/CD pipelines on business-owned Linux servers. My experience includes Docker-based workflows and custom hosting environments, with additional usage of AWS, Azure, DigitalOcean, and OVH.
          </p>
        </div>

        {/* Dotted line */}
        <div className="w-full border-t-2 border-dotted border-gray-500 my-16 custom-dotted"></div>
      </div>
    </section>
  );
}
