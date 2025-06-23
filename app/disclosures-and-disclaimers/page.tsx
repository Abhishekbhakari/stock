import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DisclosuresAndDisclaimers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 max-w-5xl space-y-10">
        {/* Creative Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">Disclosures and Disclaimers</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive transparency about our research practices and regulatory compliance
          </p>
        </div>

        {/* Research Analyst Information */}
        <section className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mb-4 md:mb-0">
              GSK
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">GAURAV SHRIRAM KULKARNI</h2>
              <div className="flex flex-wrap text-gray-600 gap-4 mt-3">
                <div className="bg-yellow-50 px-3 py-1 rounded-full text-sm">
                  <span className="font-medium">SEBI Reg. No.:</span> INH000009311
                </div>
                <div className="bg-yellow-50 px-3 py-1 rounded-full text-sm">
                  <span className="font-medium">BSE Membership No.:</span> 5534
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-5 text-gray-600 rounded-lg border-l-4 border-gray-500">
              <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>9970664299</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:researchanalyst92@gmail.com" className="text-blue-600 hover:underline">researchanalyst92@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 text-gray-600 border-gray-500">
              <h3 className="font-semibold text-gray-900 mb-2">Registered Address</h3>
              <p>
                Flat no 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062
              </p>
            </div>
          </div>
        </section>

        {/* Research Analyst Details */}
        <section className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
            <h2 className="text-2xl font-bold text-gray-900">Descriptions about "Research Analyst"</h2>
          </div>
          
          <div className="space-y-8">
            {/* History */}
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-3">
                <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">1</div>
                <h3 className="text-lg font-semibold text-gray-900">History, Present Business and Background</h3>
              </div>
              <p className="text-gray-700">
                Research Analyst is registered with SEBI as Research Analyst with Registration No. INH000009311, BSE Membership No. 5534.
                The firm got its registration on Mar 31, 2022 and is engaged in research and recommendation services. The focus is to provide 
                research and recommendations to clients, aligning interests with those of the client to provide best-suited services.
              </p>
            </div>
            
            {/* Terms and Conditions */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">2</div>
                <h3 className="text-lg font-semibold text-gray-900">Terms and Conditions of Research and Recommendation Services</h3>
              </div>
              <p className="text-gray-700">
                Terms and conditions are detailed in the Terms and Condition document. Please refer to that document for details.
              </p>
            </div>
            
            {/* Disciplinary History */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">3</div>
                <h3 className="text-lg font-semibold text-gray-900">Disciplinary History</h3>
              </div>
              <p className="text-gray-700">
                No penalties issued by SEBI under the SEBI Act or Regulations related to Research Analyst services. No pending material 
                litigations, legal proceedings, or findings from regulatory inspections or investigations.
              </p>
            </div>
            
            {/* Associates */}
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <div className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">4</div>
                <h3 className="text-lg font-semibold text-gray-900">Details of Associates</h3>
              </div>
              <p className="text-gray-700">
                No associates.
              </p>
            </div>
            
            {/* Research Disclosures */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">5</div>
                <h3 className="text-lg font-semibold text-gray-900">Disclosures Regarding Research and Recommendation Services</h3>
              </div>
              <ul className="list-disc pl-8 text-red-900 space-y-3">
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>Analyst/relatives may have a financial interest or 1%+ ownership in recommended securities. Disclosures provided at the time of advice.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>No conflict of interest arises with any issuer of securities; any such conflict will be disclosed to the client.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>No compensation received from subject company in past 12 months.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>No public offerings managed/co-managed in past 12 months by the analyst or associates.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>No investment banking or brokerage compensation received from subject companies in past 12 months.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>No compensation or benefits received in connection with research reports or recommendations.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>Subject company was not a client in the past 12 months for any services.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>No service by the analyst or associates as officer/director/employee of the subject company.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>Not engaged in market-making activities of subject company.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>Research reports are not prepared using artificial intelligence tools.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statutory Disclaimers */}
        <section className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
            <h2 className="text-2xl font-bold text-gray-900">Statutory Disclaimers</h2>
          </div>
          
          <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notice to Investors</h3>
                <p className="text-gray-700">
                  Investments in the securities market are subject to market risks. Read all the related documents carefully before investing.
                  Registration granted by SEBI, membership of BSE, and certification from NISM in no way guarantee the performance of the intermediary 
                  or provide any assurance of returns to investors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-gray-500">Risk Disclosure</h3>
              </div>
              <p className="text-gray-700 text-sm">
                All investments involve risks including potential loss of principal. Past performance is not indicative of future results.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="font-semibold text-gray-500">Research Independence</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Our research is independent and not influenced by any issuer of securities or other parties.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Badge */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 text-center">
          <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Research Analyst</h3>
          <p className="text-gray-700">
            Registration verified with SEBI and BSE. All disclosures maintained as per regulatory requirements.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}