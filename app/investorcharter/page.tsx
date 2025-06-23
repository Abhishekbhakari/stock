import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function InvestorCharter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 ">
        {/* Creative Header */}
        <div className="relative mb-12 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.967.744L14.146 7.2 13.047 14H11a1 1 0 110-2h1.8l1-6H12a1 1 0 01-.967-.744L10.146 3.2 11.047 2H12a1 1 0 011 1zm-6 10a1 1 0 011 1v1h1a1 1 0 110 2H7v1a1 1 0 11-2 0v-1H4a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">Investor Charter</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to transparency, integrity, and investor protection in all research activities
          </p>
        </div>

        {/* Vision and Mission Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
            <h2 className="text-2xl font-bold text-gray-900">Vision and Mission Statements for investors</h2>
          </div>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Vision</h3>
              <p className="text-lg">Invest with knowledge & safety.</p>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Mission</h3>
              <p className="text-lg">
                Every investor should be able to invest in right investment products based on their needs, manage and
                monitor them to meet their goals, access reports and enjoy financial wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Business Details Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">B</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Details of business transacted by the Research Analyst with respect to the investors
            </h2>
          </div>
          
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                We publish research reports based on robust and ethical research activities carried out by our organization.
                All reports are prepared with diligence, ensuring accuracy and relevance for investors.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                Our research reports and recommendations are independent and free from external influences. We ensure that
                our views on securities are neutral and unbiased to help investors make informed decisions.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                We conduct an annual audit of our research activities, policies, and procedures to ensure compliance with
                SEBI regulations. The audit findings are documented, and necessary corrective measures are implemented
                promptly.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                We provide clear disclosures of any financial interests or conflicts of interest in the securities that we
                recommend. These disclosures are prominently included in our reports as per regulatory requirements.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                All our research recommendations are based on publicly available information and our own observations. We
                comply with all regulations concerning the use of non-public or sensitive information.
              </span>
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">C</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Details of services provided to investors (No Indicative Timelines)
            </h2>
          </div>
          
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">Onboarding of Clients:</span> Clients are onboarded following due diligence and adherence to SEBI guidelines.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">Fair Distribution of Research Reports:</span> Research reports and recommendations are distributed to all clients
                without discrimination, ensuring equal access to insights and analysis.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">Confidentiality:</span> We maintain strict confidentiality of research reports until they are made available in the
                public domain, upholding the trust of our clients and compliance standards.
              </span>
            </li>
          </ul>
          
          <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">
                All services are provided with the highest standards of professionalism and in compliance with SEBI regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Grievance Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">D</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Details of grievance redressal mechanism and how to access it
            </h2>
          </div>
          
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                In case of any grievance / complaint, an investor should approach the concerned research analyst and we
                shall ensure that the grievance is resolved within 30 days.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                If the investor's complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI's
                SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints
                registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the
                status of the complaint.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance
                and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, 'G' Block, Bandra-Kurla
                Complex, Bandra (E), Mumbai - 400 051.
              </span>
            </li>
          </ul>
          
          <div className="mt-8 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <div className="text-gray-700">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Contact for Grievances</h3>
                <p className="mb-1"><span className="font-medium">Email:</span> researchanalyst92@gmail.com</p>
                <p className="mb-1"><span className="font-medium">Phone:</span> 9970664299</p>
                <p><span className="font-medium">Address:</span> Flat no 506, A wing, Kesar valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expectations Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">E</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Expectations from the investors (Responsibilities of investors)
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* Do's Section */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-semibold text-lg text-gray-900">Do's</h3>
              </div>
              
              <ul className="space-y-3 text-green-800">
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Always deal with SEBI registered Research Analyst.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Check for SEBI registration number.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Ensure that the Research Analyst has a valid registration certificate.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in
                    the following link: 
                    <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" 
                       className="text-blue-600 hover:underline ml-1">SEBI Registered Analysts</a>
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Always pay attention towards disclosures made in the research reports before investing.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the
                    details of your payments.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Before buying securities or applying in public offer, check for the research recommendation provided by
                    your research Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>Inform SEBI about Research Analyst offering assured or guaranteed returns.</span>
                </li>
              </ul>
            </div>
            
            {/* Don'ts Section */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="font-semibold text-lg text-gray-900">Don'ts</h3>
              </div>
              
              <ul className="space-y-3 text-red-900">
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>Do not provide funds for investment to the Research Analyst.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>Don't fall prey to luring advertisements or market rumours.</span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research
                    Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Do not share login credentials and password of your Trading and Demat Account with the Research Analyst.
                  </span>
                </li>
              </ul>
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
              We pledge to maintain the highest standards of integrity, transparency, and professionalism in all our research activities. 
              Your financial well-being and informed decision-making are at the heart of everything we do.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}