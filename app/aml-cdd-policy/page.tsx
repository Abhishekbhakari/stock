import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AMLCDDPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 max-w-7xl">
        {/* Creative Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">Anti-Money Laundering & Client Due Diligence Policy</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive framework to prevent money laundering and ensure regulatory compliance
          </p>
        </div>

        {/* Policy Content */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          {/* Preamble */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Preamble</h2>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700">
                Provisions of Prevention of Money Laundering Act, 2002 (PMLA) form the core of the legal framework put in place by India to combat money laundering and related crimes. PMLA and the Rules notified thereunder came into force from 1st July, 2005.
                <br /><br />
                It is mandatory for SEBI registered Intermediaries to put in place a system for identifying, monitoring, and reporting suspected money laundering (ML) or terrorist financing (TF) transactions, and a policy for ensuring that SEBI's AML guidelines are complied with.
                <br /><br />
                Money Laundering involves disguising financial assets to use them without detection. It transforms proceeds from criminal activity into funds with an apparently legal source.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Objectives of the Policy</h2>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                We are committed to examining anti-money laundering strategies regularly, maintaining effective systems and internal controls to generate and scrutinize suspicious alerts, report them, and prevent ML activities.
              </p>
            </div>
          </div>

          {/* Financial Intelligence Unit */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Financial Intelligence Unit-India (FIU-IND)</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
              <p className="text-gray-700">
                Set up on November 18, 2004, FIU-IND reports directly to the Economic Intelligence Council. It receives, analyzes, and disseminates suspect financial transaction data and coordinates with enforcement agencies.
              </p>
            </div>
          </div>

          {/* Suspicious Transactions */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
              <h2 className="text-2xl font-bold text-gray-900">Suspicious Transactions</h2>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-700">
                As per Section 2(1)(g) of PMLA Rules, suspicious transactions:
              </p>
              <ul className="list-disc text-gray-800 pl-8 mt-3 space-y-2">
                <li>May involve proceeds of crime.</li>
                <li>Appear unusually complex or without economic rationale.</li>
                <li>Raise suspicion due to possible links with terrorism.</li>
              </ul>
            </div>
          </div>

          {/* Stages of Money Laundering */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">6</div>
              <h2 className="text-2xl font-bold text-gray-900">Stages of Money Laundering</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-gray-900 mb-2">Placement</h3>
                <p className="text-gray-700">
                  Introducing criminal funds into the financial system, often by structuring transactions.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">Layering</h3>
                <p className="text-gray-700">
                  Conducting complex transactions to obscure origin.
                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-700">
                  Reintroducing laundered money as legitimate business funds.
                </p>
              </div>
            </div>
          </div>

          {/* AML Measures */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">7</div>
              <h2 className="text-2xl font-bold text-gray-900">AML Measures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Client Acceptance Policy</h3>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Client Identification</h3>
              </div>
              <div className="bg-green-50 p-5 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Transaction Monitoring</h3>
              </div>
            </div>
          </div>

          {/* Client Due Diligence */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">8</div>
              <h2 className="text-2xl font-bold text-gray-900">Client Due Diligence</h2>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700 mb-3">
                This applies only to client onboarding:
              </p>
              <ul className="list-disc text-gray-800 pl-8 space-y-2">
                <li>We collect PAN and DOB, verify KYC via CVL KRA, and store screenshots.</li>
                <li>Only KYC Validated/Registered clients can pay.</li>
                <li>Onboarding follows SEBI RA regulations.</li>
              </ul>
            </div>
          </div>

          {/* Reporting to FIU-IND */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">10</div>
              <h2 className="text-2xl font-bold text-gray-900">Reporting to FIU-IND</h2>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <p className="font-semibold text-gray-900 mb-2">Director, FIU–IND</p>
              <p className="text-gray-700">
                Financial Intelligence Unit India<br />
                6th Floor, Hotel Samrat, Chanakyapuri, New Delhi – 110021
              </p>
            </div>
          </div>

          {/* Staff Responsibilities */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">13</div>
              <h2 className="text-2xl font-bold text-gray-900">Staff Responsibilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-gray-900 mb-3">Principal Officer: Ashish Arole</h3>
                <p className="text-gray-700 mb-2">Responsibilities include:</p>
                <ul className="list-disc text-gray-600 pl-6 space-y-1">
                  <li>Communicating policy</li>
                  <li>Handling suspicious activity reports</li>
                  <li>Training and guiding staff</li>
                  <li>Ensuring AML policy compliance</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-3">Onboarding Staff</h3>
                <p className="text-gray-700">
                  Must perform KYC, CDD, and report any suspicious activity.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">17</div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            </div>
            <div className="bg-gray-50 text-gray-600 p-5 rounded-lg border-l-4 border-gray-500">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-medium w-32">Name:</span>
                  <span>Gaurav Shriram Kulkarni</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Registration No.:</span>
                  <span>INH000009311</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">BSE Enlistment No.:</span>
                  <span>5534</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Trade Name:</span>
                  <span>Gaurav Shriram Kulkarni</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Address:</span>
                  <span>Flat no 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Contact No.:</span>
                  <span>9970664299</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Email:</span>
                  <a href="mailto:researchanalyst92@gmail.com" className="text-blue-600 hover:underline">researchanalyst92@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Policy Commitment */}
          <div className="mt-10 p-6 bg-yellow-100 rounded-xl border-2 border-yellow-300">
            <div className="flex items-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Our Commitment</h3>
                <p className="text-gray-700 mt-1">
                  We are dedicated to maintaining the highest standards of AML and CDD compliance to prevent financial crimes and protect our clients and the financial system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}