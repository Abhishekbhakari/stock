import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CodeofConduct() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 max-w-7xl">
        {/* Creative Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">Code of Conduct</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to ethical practices, integrity, and professional standards
          </p>
        </div>

        {/* Policy Content */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700">
                Securities Exchange Board of India vide its Notification No. LAD-NRO/GN/2014-15/07/1414 dated 1st September 2014 has notified SEBI (Research Analysts) Regulations, 2014. These regulations aim to foster transparency in security research and provide investors with reliable and useful information to make informed investment decisions.
                <br /><br />
                According to these Regulations, Research Analysts or Research Entities are required to adhere to the code of conduct as detailed in the THIRD SCHEDULE of the regulations.
              </p>
            </div>
          </div>

          {/* Applicability */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Applicability</h2>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                This policy is applicable to Gaurav Kulkarni (“RA”), a Research Analyst responsible for preparation or publication of research reports, making recommendations such as ‘buy, sell, hold’, or giving price targets/opinions on listed or to-be-listed securities.
              </p>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Code of Conduct</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.1</span>
                    Honesty and Good Faith
                  </h3>
                  <p className="text-gray-700">
                    Act honestly and in good faith in all professional activities.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.2</span>
                    Diligence
                  </h3>
                  <p className="text-gray-700">
                    Apply due skill, care, and diligence. Ensure research reports are prepared after thorough analysis.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.3</span>
                    Conflict of Interest
                  </h3>
                  <p className="text-gray-700">
                    Disclose and address conflicts that may affect impartiality. Avoid trading with material non-public information.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.4</span>
                    Insider Trading
                  </h3>
                  <p className="text-gray-700">
                    Employees must not engage in insider trading or use advance knowledge of pending orders for personal gain.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.5</span>
                    Confidentiality
                  </h3>
                  <p className="text-gray-700">
                    Maintain confidentiality of research reports until published publicly.
                  </p>
                </div>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-6">
                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.6</span>
                    Professional Standard
                  </h3>
                  <p className="text-gray-700">
                    Uphold high standards while preparing and distributing research reports.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.7</span>
                    Compliance
                  </h3>
                  <p className="text-gray-700">
                    Adhere to all applicable regulatory requirements.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.8</span>
                    Responsibility of Management
                  </h3>
                  <p className="text-gray-700">
                    Ensure adherence to professional conduct and compliance procedures across the organization.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.9</span>
                    Suitability of Information
                  </h3>
                  <p className="text-gray-700">
                    Research Analysts must not be incentivized to promote products misaligned with client risk profiles.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.10</span>
                    Sharing of Information
                  </h3>
                  <p className="text-gray-700">
                    Do not share client information for unauthorized use. Ensure strict data confidentiality.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-100 p-5 rounded-xl border-2 border-yellow-300">
              <div className="flex items-center">
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Our Ethical Commitment</h3>
                  <p className="text-gray-700 mt-1">
                    We are dedicated to maintaining the highest ethical standards in all our research activities, ensuring transparency, integrity, and reliability in our recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-10 text-black">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 text-black rounded-lg border-l-4 border-gray-500">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-32">Name:</span>
                    <span>Gaurav Shriram Kulkarni</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Entity Type:</span>
                    <span>Individual</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Registration No.:</span>
                    <span>INH000009311</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">BSE Enlistment No.:</span>
                    <span>5534</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
                <ul className="space-y-3">
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
          </div>
          
          {/* Signature */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <div className="inline-block border-t-2 border-gray-400 w-48 mb-4"></div>
            <p className="font-semibold text-gray-900">Gaurav Shriram Kulkarni</p>
            <p className="text-gray-700">Research Analyst</p>
            <p className="text-sm text-gray-600 mt-2">Registration No: INH000009311 | BSE Enlistment: 5534</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}