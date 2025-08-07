import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function InvestorComplaints() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 max-w-7xl">
        {/* Creative Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">Investor Complaints</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent reporting of investor complaints and resolution metrics
          </p>
        </div>

        {/* Data Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black text-lg">Current Month</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">July 2025</p>
            <p className="text-gray-700">Complaint data for the current reporting period</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-black">Total Complaints</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">0</p>
            <p className="text-gray-700">No pending complaints as of July 2025</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-black">Resolution Time</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">N/A</p>
            <p className="text-gray-700">No complaints requiring resolution</p>
          </div>
        </div>

        {/* Source-wise Complaints Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
            <h2 className="text-2xl font-bold text-gray-900">Source-wise Investor Complaints</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
              <thead className="text-xs text-gray-700 uppercase bg-yellow-100">
                <tr>
                  <th className="px-6 py-3 border border-yellow-300">Sr. No.</th>
                  <th className="px-6 py-3 border border-yellow-300">Received from</th>
                  <th className="px-6 py-3 border border-yellow-300">Pending at end of last month</th>
                  <th className="px-6 py-3 border border-yellow-300">Received</th>
                  <th className="px-6 py-3 border border-yellow-300">Resolved *</th>
                  <th className="px-6 py-3 border border-yellow-300">Total Pending #</th>
                  <th className="px-6 py-3 border border-yellow-300">Pending complaints > 3 months</th>
                  <th className="px-6 py-3 border border-yellow-300">Avg Resolution Time ^ (days)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Directly from Investor", "-", "0", "-", "-", "-", "-"],
                  ["SEBI (SCORES)", "-", "0", "-", "-", "-", "-"],
                  ["Other Sources (if any)", "-", "0", "-", "-", "-", "-"],
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-yellow-50`}
                  >
                    <td className="px-6 py-4 border border-yellow-300 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 border border-yellow-300 font-medium">{row[0]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[1]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[2]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[3]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[4]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[5]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[6]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg> */}
              <div>
                <p className="text-gray-700">
                 ^ = Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
                </p>
                <p className="text-gray-700">
                * = Inclusive of complaints of previous months resolved in the current month.
                </p>
                <p className="text-gray-700">
                 # = Inclusive of complaints pending as on the last day of the month.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Trend Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
            <h2 className="text-2xl font-bold text-gray-900">Trend of Monthly Disposal of Complaints</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
              <thead className="text-xs text-gray-700 uppercase bg-yellow-100">
                <tr>
                  <th className="px-6 py-3 border border-yellow-300">Sr. No.</th>
                  <th className="px-6 py-3 border border-yellow-300">Month</th>
                  <th className="px-6 py-3 border border-yellow-300">Carried Forward</th>
                  <th className="px-6 py-3 border border-yellow-300">Received</th>
                  <th className="px-6 py-3 border border-yellow-300">Resolved*</th>
                  <th className="px-6 py-3 border border-yellow-300">Pending#</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["July 2025", "-", "0", "-", "-"],
                  ["June 2025", "-", "0", "-", "-"],
                  ["May 2025", "-", "0", "-", "-"],
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-yellow-50`}
                  >
                    <td className="px-6 py-4 border border-yellow-300 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 border border-yellow-300 font-medium">{row[0]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[1]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[2]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[3]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start">
            
              <div>
                <p className="text-gray-700">
                * = Inclusive of complaints of previous months resolved in the current month.
                </p>
                <p className="text-gray-700">
                 # = Inclusive of complaints pending as on the last day of the month.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Trend Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
            <h2 className="text-2xl font-bold text-gray-900">Trend of Annual Disposal of Complaints</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
              <thead className="text-xs text-gray-700 uppercase bg-yellow-100">
                <tr>
                  <th className="px-6 py-3 border border-yellow-300">Sr. No.</th>
                  <th className="px-6 py-3 border border-yellow-300">Year</th>
                  <th className="px-6 py-3 border border-yellow-300">Carried Forward</th>
                  <th className="px-6 py-3 border border-yellow-300">Received</th>
                  <th className="px-6 py-3 border border-yellow-300">Resolved*</th>
                  <th className="px-6 py-3 border border-yellow-300">Pending#</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2024–25", "-", "0", "-", "-"],
                  ["2023–24", "-", "0", "-", "-"],
                  ["2022–23", "-", "0", "-", "-"],
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-yellow-50`}
                  >
                    <td className="px-6 py-4 border border-yellow-300 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 border border-yellow-300 font-medium">{row[0]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[1]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[2]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[3]}</td>
                    <td className="px-6 py-4 border border-yellow-300">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start">

              <div>
                <p className="text-gray-700">
                * = Inclusive of complaints of previous months resolved in the current month.
                </p>
                <p className="text-gray-700">
                 # = Inclusive of complaints pending as on the last day of the month.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-12 bg-yellow-50 p-8 rounded-xl shadow-lg border-2 border-yellow-300">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Investors</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We maintain a zero-tolerance policy for unresolved investor complaints. Our proactive approach ensures that any concerns are addressed promptly, transparently, and to the satisfaction of all parties involved.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}