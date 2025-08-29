import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />

      <main className="container mx-auto py-12 px-4 max-w-5xl">
        {/* Creative Header */}
        <div className="relative mb-14 text-center">
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-3 pt-6">
            Grievance Redressal Mechanism (Accessibility Compliance)
          </h1>
          <p className="text-lg text-gray-700 mb-2"></p>
          <p className=" text-gray-700 mb-2">Grievance Redressal Mechanism – Accessibility Compliance (SEBI Circular dated July 31, 2025)</p>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In compliance with the SEBI circular,{" "}
            <span className="font-semibold text-gray-800">
              Gaurav Shriram Kulkarni
            </span>{" "}
            has established a dedicated grievance redressal mechanism to address
            accessibility-related complaints from persons with disabilities
            (PwDs).
          </p>
          
        </div>

        {/* Dedicated Channels Section */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-xl border border-yellow-300 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Dedicated Channels
            </h2>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Email:{" "}
                <a
                  href="mailto:researchanalyst92@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  researchanalyst92@gmail.com
                </a>
              </li>
              <li>
                Helpline:{" "}
                <span className="text-blue-600 font-medium">
                  +91-9970664299
                </span>{" "}
                <span className="text-gray-500 text-sm">
                  (Mon–Fri, 9:30 AM – 6:00 PM)
                </span>
              </li>
              <li>
                Web Form:{" "}
                <a
                  href="https://www.equitybygk.com/accessibility"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  www.equitybygk.com/accessibility
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Process</h2>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>
                All accessibility-related grievances will be{" "}
                <span className="font-semibold">acknowledged</span> within 2
                working days.
              </li>
              <li>
                <span className="font-semibold">Resolution/response</span> will
                be provided within 15 working days.
              </li>
              <li>
                Complex issues requiring longer timelines will be{" "}
                <span className="font-semibold">communicated clearly</span> to
                the complainant.
              </li>
            </ul>
          </div>
        </section>

        {/* Escalation Matrix Section */}
        <section className="mb-12 bg-yellow-50 p-8 rounded-2xl shadow-xl border border-yellow-300 hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Escalation Matrix
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              For further assistance, issues can be escalated as per the levels
              below:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 text-left">
              <h3 className="font-bold text-lg mb-2">Level 1: Nodal Officer</h3>
              <p>
                <span className="font-medium">Name:</span> Gaurav Shriram
                Kulkarni <br />
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:researchanalyst92@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  researchanalyst92@gmail.com
                </a>
                <br />
                <span className="font-medium">Mobile:</span> +91-9970664299
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 text-left">
              <h3 className="font-bold text-lg mb-2">
                Level 2: Compliance Officer
              </h3>
              <p>
                <span className="font-medium">Name:</span> Gaurav Shriram
                Kulkarni <br />
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:researchanalyst92@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  researchanalyst92@gmail.com
                </a>
                <br />
                <span className="font-medium">Mobile:</span> +91-9970664299
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
