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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.967.744L14.146 7.2 13.047 14H11a1 1 0 110-2h1.8l1-6H12a1 1 0 01-.967-.744L10.146 3.2 11.047 2H12a1 1 0 011 1zm-6 10a1 1 0 011 1v1h1a1 1 0 110 2H7v1a1 1 0 11-2 0v-1H4a1 1 0 110-2h1v-1a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">
            Investor Charter
          </h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to transparency, integrity, and investor protection
            in all research activities
          </p>
        </div>

        {/* Vision and Mission Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>

          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
              A
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Vision and Mission Statements for investors
            </h2>
          </div>

          <div className="space-y-6 text-gray-700">
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Vision
              </h3>
              <p className="text-lg">Invest with knowledge & safety.</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Mission
              </h3>
              <p className="text-lg">
                Every investor should be able to invest in right investment
                products based on their needs, manage and monitor them to meet
                their goals, access reports and enjoy financial wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Business Details Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
              B
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Details of business transacted by the Research Analyst with
              respect to the investors
            </h2>
          </div>

          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                To publish research report based on the research activities of
                the RA
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                To provide an independent unbiased view on securities.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                To offer unbiased recommendation, disclosing the financial
                interests in recommended securities.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                To provide research recommendation, based on analysis of
                publicly available information and known observations.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>To conduct audit annually</span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                To ensure that all advertisements are in adherence to the
                provisions of the Advertisement Code for Research Analysts.
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                To maintain records of interactions, with all clients including
                prospective clients (prior to onboarding), where any
                conversation related to the research services has taken place.
              </span>
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
              C
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Details of services provided to investors (No Indicative
              Timelines)
            </h2>
          </div>

          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  Onboarding of Clients
                </span>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sharing of terms and conditions of research services</li>
                  <li>Completing KYC of fee paying clients </li>
                </ul>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  Disclosure to Clients
                </span>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To disclose, information that is material for the client to
                    make an informed decision, including details of its business
                    activity, disciplinary history, the terms and conditions of
                    research services, details of associates, risks and
                    conflicts of interest, if any
                  </li>
                  <li>
                    To disclose the extent of use of Artificial Intelligence
                    tools in providing research services{" "}
                  </li>
                  <li>
                    To disclose, while distributing a third party research
                    report, any material conflict of interest of such third
                    party research provider or provide web address that directs
                    a recipient to the relevant disclosures
                  </li>
                  <li>
                    To disclose any conflict of interest of the activities of
                    providing research services with other activities of the
                    research analyst.{" "}
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To distribute research reports and recommendations to the
                  clients without discrimination.{" "}
                </span>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To maintain confidentiality w.r.t publication of the research
                  report until made available in the public domain.{" "}
                </span>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To respect data privacy rights of clients and take measures to
                  protect unauthorized use of their confidential information{" "}
                </span>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To disclose the timelines for the services provided by the
                  research analyst to clients and ensure adherence to the said
                  timelines{" "}
                </span>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To provide clear guidance and adequate caution notice to
                  clients when providing recommendations for dealing in complex
                  and high-risk financial products/services{" "}
                </span>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To treat all clients with honesty and integrity{" "}
                </span>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                <span className="font-semibold text-gray-900">
                  To ensure confidentiality of information shared by clients
                  unless such information is required to be provided in
                  furtherance of discharging legal obligations or a client has
                  provided specific consent to share such information.{" "}
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-700">
                All services are provided with the highest standards of
                professionalism and in compliance with SEBI regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Grievance Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
              D
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Details of grievance redressal mechanism and how to access it
            </h2>
          </div>

          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <span>
                Investor can lodge complaint/grievance against Research Analyst
                in the following ways:
                <br />
                <u>Mode of filing the complaint with research analyst </u>
                <br />
                <span>In case of any grievance / complaint, an investor may approach the concerned 
Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance. </span>
<br />
<u>Mode of filing the complaint on SCORES or with Research Analyst 
Administration and Supervisory Body (RAASB)</u>
                <ol className="list-decimal pl-8 space-y-2 text-gray-700">
                  <li>
                    SCORES 2.0 (a web based centralized grievance redressal
                    system of SEBI for facilitating effective grievance
                    redressal in time-bound manner) (https://scores.sebi.gov.in)
                    <br />
                    <span>
                      Two level review for complaint/grievance against Research
                      Analyst:{" "}
                    </span>
                    <ul className="list-disc pl-8 space-y-2 text-gray-700">
                      <li>First review done by designated body (RAASB)</li>
                      <li>Second review done by SEBI </li>
                    </ul>
                  </li>
                  <li>Email to designated email ID of RAASB </li>
                </ol>
              </span>
            </li>
            <li className="flex">
              <div className="mr-3 mt-1 w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
              <div className="break-words whitespace-pre-line">
                <p>
                  If the Investor is not satisfied with the resolution provided by the Market Participants,
                  then the Investor has the option to file the complaint/grievance on the <span className="font-semibold">SMARTODR platform </span>
                  for its resolution through online conciliation or arbitration.
                </p>
                <p className="mt-2">
                  <span className="font-semibold">With regard to physical complaints, investors may send their complaints to:</span>
                </p>
                <address className="block font-bold not-italic mt-1">
                  Office of Investor Assistance and Education,<br />
                  Securities and Exchange Board of India,<br />
                  SEBI Bhavan, Plot No. C4-A, ‘G’ Block,<br />
                  Bandra-Kurla Complex, Bandra (E),<br />
                  Mumbai - 400 051
                </address>
              </div>
            </li>
          
          </ul>

        </section>

                {/* Rights of Investors Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
              E
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Rights of Investors
            </h2>
          </div>
          <ul className="list-disc pl-8 space-y-4 text-gray-700">
            <li>Right to Privacy and Confidentiality</li>
            <li>Right to Transparent Practices</li>
            <li>Right to Fair and Equitable Treatment</li>
            <li>Right to Adequate Information</li>
            <li>
              Right to Initial and Continuing Disclosure – Right to receive
              information about all the statutory and regulatory disclosures
            </li>
            <li>Right to Fair &amp; True Advertisement</li>
            <li>
              Right to Awareness about Service Parameters and Turnaround Times
            </li>
            <li>Right to be informed of the timelines for each service</li>
            <li>Right to be Heard and Satisfactory Grievance Redressal</li>
            <li>Right to have timely redressal</li>
            <li>
              Right to Exit from Financial product or service in accordance with
              the terms and conditions agreed with the research analyst
            </li>
            <li>
              Right to receive clear guidance and caution notice when dealing in
              Complex and High-Risk Financial Products and Services
            </li>
            <li>
              Additional Rights to vulnerable consumers – Right to get access to
              services in a suitable manner even if differently abled
            </li>
            <li>
              Right to provide feedback on the financial products and services
              used
            </li>
            <li>
              Right against coercive, unfair, and one-sided clauses in financial
              agreements
            </li>
          </ul>
        </section>

        {/* Expectations Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">
              F
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Expectations from the investors (Responsibilities of investors)
            </h2>
          </div>

          <div className="space-y-8">
            {/* Do's Section */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="font-semibold text-lg text-gray-900">Do's</h3>
              </div>

              <ul className="space-y-3 text-green-800">
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Always deal with SEBI registered Research Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Ensure that the Research Analyst has a valid registration
                    certificate.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span></span>
                  <span>
                    Check for SEBI registration number. <br />
                    Please refer to the list of all SEBI registered Research
                    Analysts which is available on SEBI website in the following
                    link:
                    <a
                      href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      SEBI Registered Analysts
                    </a>
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Always pay attention towards disclosures made in the
                    research reports before investing.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Pay your Research Analyst through banking channels only and
                    maintain duly signed receipts mentioning the details of your
                    payments. You may make payment of fees through Centralized
                    Fee Collection Mechanism (CeFCoM) of RAASB if research
                    analyst has opted for the mechanism. (Applicable for fee
                    paying clients only)
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Before buying/ selling securities or applying in public
                    offer, check for the research recommendation provided by
                    your Research Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Ask all relevant questions and clear your doubts with your
                    Research Analyst before acting on recommendation.{" "}
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Seek clarifications and guidance on research recommendations
                    from your Research Analyst, especially if it involves
                    complex and high risk financial products and services.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Always be aware that you have the right to stop availing the
                    service of a Research Analyst as per the terms of service
                    agreed between you and your Research Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Always be aware that you have the right to provide feedback
                    to your Research Analyst in respect of the services
                    received.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Always be aware that you will not be bound by any clause,
                    prescribed by the research analyst, which is contravening
                    any regulatory provisions.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Inform SEBI about Research Analyst offering assured or
                    guaranteed returns.
                  </span>
                </li>
              </ul>
            </div>

            {/* Don'ts Section */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h3 className="font-semibold text-lg text-gray-900">Don'ts</h3>
              </div>

              <ul className="space-y-3 text-red-900">
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Do not provide funds for investment to the Research Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Don't fall prey to luring advertisements or market rumours.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Do not get attracted to limited period discount or other
                    incentive, gifts, etc. offered by Research Analyst.
                  </span>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>
                    Do not share login credentials and password of your Trading
                    and Demat Account with the Research Analyst.
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment to Investors
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We pledge to maintain the highest standards of integrity,
              transparency, and professionalism in all our research activities.
              Your financial well-being and informed decision-making are at the
              heart of everything we do.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
