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
                Securities Exchange Board of India vide its Notification No.
                LAD-NRO/GN/2014-15/07/1414 dated 1st September 2014 has notified SEBI
                (Research Analysts) Regulations, 2014. These regulations have been
                introduced by SEBI with the objective of fostering transparency in
                security research and provide investors with more reliable and useful
                information to make investment decisions.
                <br /><br />
                According to these Regulations, Research Analysts or Research Entity are
                required to adhere to the below code of conduct (as detailed in the
                THIRD SCHEDULE of the regulations)
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
                The policy shall be applicable to Gaurav Kulkarni ("RA") Research
                analyst i.e. a person primarily responsible for preparation or publication of the
                content of the research report; or providing a research report or Making 'buy,
                sell/hold' or 'overweight / underweight' recommendation or giving price target or offering an
                opinion on any security that are listed or to be listed on a Stock Exchange.
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
                    Research analyst or research entity shall act honestly and in good
                    faith.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.2</span>
                    Diligence
                  </h3>
                  <p className="text-gray-700">
                    Research analyst or research entity shall act with due skill, care and
                    diligence and shall ensure that the research report is prepared after thorough analysis.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.3</span>
                    Conflict of Interest
                  </h3>
                  <p className="text-gray-700">
                    Research analyst or research entity shall effectively address conflict
                    of interest which may affect the impartiality of its research analysis and research report and shall make
                    appropriate disclosures to address the same.
                    <br /><br />
                    Research Analysts must disclose any potential or actual potential
                    conflict of interest and implement appropriate measures to manage and mitigate these
                    conflicts effectively.
                    <br /><br />
                    Research Analysts should refrain from trading securities while
                    possessing material non-public information or engaging in activities that contribute to
                    market manipulation.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.4</span>
                    Insider Trading or front running
                  </h3>
                  <p className="text-gray-700">
                    Research analyst or research entity or its employees shall not engage in
                    insider trading or front running or front running of its own research report.
                    <br /><br />
                    No staff member in possession of inside information may be involved in
                    trading, making recommendations or publishing research with respect to the financial
                    instruments to which the information relates.
                    <br /><br />
                    Front-running is prohibited. There are two ways in which front-running
                    can arise:
                    <br /><br />
                    a) Through use of client or their information, i.e. utilizing the
                    advantage of advance knowledge of pending orders of clients
                    <br /><br />
                    b) Through information about the timing or contents of research prior
                    to publication to clients
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.5</span>
                    Confidentiality
                  </h3>
                  <p className="text-gray-700">
                    Research analyst or research entity or its employees shall maintain
                    confidentiality of report till the report is made public.
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
                    Research analyst or research entity or its employees engaged in research
                    analysis shall observe high professional standard while preparing research report.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.7</span>
                    Compliance
                  </h3>
                  <p className="text-gray-700">
                    Research analyst or research entity shall comply with all regulatory
                    requirements applicable to the conduct of its business activities.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.8</span>
                    Responsibility of senior management
                  </h3>
                  <p className="text-gray-700">
                    The senior management of research analyst or research entity shall bear
                    primary responsibility for ensuring the maintenance of appropriate standards of
                    conduct and adherence to proper procedures.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.9</span>
                    Suitability of Information
                  </h3>
                  <p className="text-gray-700">
                    Research Analysts must not be incentivized to sell products that do not
                    align with the general risk profile of their clients. We must prioritize the
                    suitability of investment products for the client's specific needs and circumstances.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">3.10</span>
                    Sharing of Information
                  </h3>
                  <p className="text-gray-700">
                    Research Analysts are strictly prohibited from sharing client
                    information obtained through their professional dealings for personal gains and any
                    unauthorized purpose.
                    <br /><br />
                    This guideline emphasizes the importance of maintaining client
                    confidentiality and data privacy.
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
              <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 text-black rounded-lg border-l-4 border-gray-500">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-40">Name of RA:</span>
                    <span>Gaurav Shriram Kulkarni</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-40">Entity Type:</span>
                    <span>Individual</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-40">Registration No.:</span>
                    <span>INH000009311</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-40">BSE Enlistment No.:</span>
                    <span>5534</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-40">Trade Name:</span>
                    <span>Gaurav Shriram Kulkarni</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-40">Residential/ Registered Address:</span>
                    <span>Flat no 506, A wing, Kesar valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-40">Contact No.:</span>
                    <span>9970664299</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-40">Email No.:</span>
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