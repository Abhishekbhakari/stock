import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SEBIRegistrationCertificate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 max-w-4xl">
        {/* Creative Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">SEBI Registration Certificate</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Official Registration Certificate for Research Analyst Services
          </p>
        </div>

        {/* Certificate Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-2 border-yellow-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-2">Registration Number</h3>
              <p className="text-lg text-black font-semibold">INH000009311</p>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-2">Registration Date</h3>
              <p className="text-lg text-black font-semibold">March 31, 2022</p>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-2">Entity Name</h3>
              <p className="text-lg text-black font-semibold">Gaurav Shriram Kulkarni</p>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-2">BSE Enlistment</h3>
              <p className="text-lg text-black font-semibold">5534</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center text-gray-600 mb-6">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>SEBI Registered</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Regulatory Compliance</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Valid Certification</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 mb-6">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">
                This registration certificate verifies that Gaurav Shriram Kulkarni is authorized to provide research analysis services
                in compliance with SEBI (Research Analysts) Regulations, 2014.
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Viewer */}
        {/* <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Certificate Viewer</h2>
            <div className="flex items-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span>Official Document</span>
            </div>
          </div>
          
          <div className="border-4 border-yellow-300 rounded-lg p-1 shadow-inner bg-gray-50">
            <iframe
              src="/sebi-certificate.pdf"
              className="w-full h-[600px] rounded-md"
              title="SEBI Registration Certificate"
            />
          </div>
          
          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>
              This certificate can be verified on SEBI's official website. 
              <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" 
                 className="text-blue-600 hover:underline ml-1">
                Verify Registration
              </a>
            </p>
            <p className="mt-2">
              <span className="font-medium">Note:</span> Place your PDF file at: public/sebi-certificate.pdf
            </p>
          </div>
        </div> */}

        {/* Additional Information */}
        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Document Validity</h3>
            </div>
            <p className="text-gray-700">
              This registration is valid as long as the Research Analyst complies with SEBI regulations and maintains 
              required qualifications.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Compliance Requirements</h3>
            </div>
            <p className="text-gray-700">
              Research Analysts must adhere to SEBI regulations, maintain proper records, and complete annual compliance audits.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Verification</h3>
            </div>
            <p className="text-gray-700">
              Investors can verify the registration status through SEBI's website using the registration number INH000009311.
            </p>
          </div>
        </div> */}
      </main>
      
      <Footer />
    </div>
  );
}