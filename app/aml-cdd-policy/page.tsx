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
                Provisions of Prevention of Money Laundering Act, 2002 Prevention of Money Laundering Act, 2002 (PMLA) forms the core of legal framework put in place by India to combat money laundering and related crimes. PMLA and the Rules notified there under came into force from 1st July, 2005.
                <br /><br />
                It is mandatory for SEBI registered Intermediary to put in place a system for identifying, monitoring and reporting suspected money laundering (ML) or terrorist financing (TF) transactions to the law enforcement authorities and a policy for ensuring that the anti-money laundering guidelines issued by SEBI from time to time are complied with.
                <br /><br />
                Under PMLA, all the entries registered with SEBI are required to furnish information of all the suspicious transactions whether or not made in cash to FIU-IND. Under Section 3 of PMLA, projecting of crime as untainted property is an offence of money laundering liable to be punishment under section 4 of the PMLA.
                <br /><br />
                Money Laundering involves disguising financial assets so that they can be used without detection of the illegal activity that produced them. Through money laundering, the launderer transforms the monetary proceeds derived from criminal activity into funds with as apparently legal source.
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
                We are committed to examining its anti-money laundering strategies, goals and objectives on an ongoing basis and maintaining an effective anti-money laundering program for its business that reflects the best practices for a diversified, retail financial services.
                <br /><br />
                The objective of having an anti-money laundering policy & procedures is to have in place adequate system and internal control that help to generate suspicious alert, scrutinize the matter, report the alerts to proper authority and to prevent money-laundering activities.
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
                The Government of India has set up Financial Intelligence Unit (FIU-IND) on November 18, 2004 as an independent body to report directly to the Economic Intelligence Council (EIC) headed by the Finance Minister.
                <br /><br />
                FIU-IND is the central national agency of India responsible for receiving, processing, analyzing and disseminating information of suspect financial transactions. FIU-IND is also responsible for coordinating and strengthening efforts of national and international intelligence, investigation and enforcement agencies in combating money laundering and related crimes.
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
                Section 2 (1) (g) of PMLA Rules defines suspicious transaction whether or not made in cash which, to a person acting in good faith:
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>Gives rise to a reasonable ground of suspicious that it may involve the proceeds of crime</li>
                  <li>Appears to be made in circumstances of unusual or unjustified complexity</li>
                  <li>Appears to have no economic rationale or bona fide purpose</li>
                  <li>Gives rise to a reasonable ground of suspicious that it may involve facing of the activities relating to terrorism</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Money Laundering */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">5</div>
              <h2 className="text-2xl font-bold text-gray-900">What is Money Laundering?</h2>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700">
                Money Laundering involves disguising financial assets so that they can be used without detection of the illegal activity that produced them. Through money laundering, the launderer transforms the monetary proceeds derived from criminal activity into funds with an apparent legal source. Money laundering is the process by which criminals attempt to hide and disguise the true origin and ownership of the proceeds of their criminal activities.
                <br /><br />
                The term "Money Laundering" is also used in relation to the financing of terrorist activity (where the funds may, or may not, originate from crime). Money Laundering is a process of making dirty money look clean.
                <br /><br />
                Money is moved around the financial system again and again in such manner that its origin gets hidden.
              </p>
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
                  Placement is the initial stage in which money from criminal activities is placed in financial institutions. One of the most common methods is structuring—breaking up currency transactions into portions below reporting thresholds.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">Layering</h3>
                <p className="text-gray-700">
                  Layering involves complex financial transactions to hide the origin of money. This can include securities trades, purchases of financial products, cash transfers, currency exchanges, or purchases of legitimate businesses.
                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-700">
                  Integration is the final stage where laundered proceeds are re-injected into the economy as normal business funds. Banks are vulnerable at this stage as criminal proceeds can enter as large cash deposits.
                </p>
              </div>
            </div>
          </div>

          {/* AML Measures */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">7</div>
              <h2 className="text-2xl font-bold text-gray-900">Policy and Procedures for Anti Money Laundering Measures</h2>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
              <p className="text-gray-700">
                The Prevention of Money Laundering Act, 2002 has come into effect from 1st July 2005. Necessary Notifications/Rules under the said Act have been published in the Gazette of India on 1st July 2005.
                <br /><br />
                As per the Act, every banking company, financial institution and intermediary must maintain records of transactions as prescribed in the Rules, including:
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>All cash transactions over ₹10 lakhs or equivalent in foreign currency</li>
                  <li>All series of connected cash transactions below ₹10 lakhs within one calendar month</li>
                  <li>All suspicious transactions whether in cash or not</li>
                </ul>
                <br />
                We will adopt procedures to implement AML provisions, including:
                <ol className="list-decimal pl-8 mt-3 space-y-2">
                  <li>Policy for acceptance of clients</li>
                  <li>Procedure for identifying the clients</li>
                  <li>Transaction monitoring and reporting (especially Suspicious Transactions Reporting)</li>
                </ol>
                <br />
                Note: The words client/customer/subscriber are used interchangeably meaning paid customers availing our research services.
              </p>
            </div>
          </div>

          {/* Client Due Diligence */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">8</div>
              <h2 className="text-2xl font-bold text-gray-900">Client Due Diligence Process</h2>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700">
                This policy is only applicable for client onboarding with us.
                <br /><br />
                <strong>Obtaining sufficient information to identify beneficial owners:</strong>
                <br />
                Gaurav Kulkarni, SEBI Registered Research Analyst(INH000009311) provides non-discretionary research recommendation service. Execution is handled by clients themselves. Transaction data is not handled by us. Identifying the beneficial owner of securities accounts remains the responsibility of the broker handling the client's account.
                <br /><br />
                <strong>Verify the Customer's Identity:</strong>
                <br />
                As per Regulation 25(1) of RA Regulations, we follow KYC procedure for fee-paying clients. When new clients register, we collect PAN and Date of Birth to verify KYC status. Only clients with "KYC Validated" or "KYC Registered" status can make payments. We verify KYC status on CVL KRA and store the screenshot of the KYC Record.
                <br /><br />
                Gaurav Kulkarni adopts a comprehensive Client Onboarding Procedure to verify customer identity before granting access. Please refer to the Customer Onboarding Policy in the Internal Policies and Procedures document.
              </p>
            </div>
          </div>

          {/* Transaction Monitoring */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">9</div>
              <h2 className="text-2xl font-bold text-gray-900">Transaction Monitoring and Reporting (Suspicious Transactions Reporting (STR))</h2>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                The only transaction encountered is collection of fees. We don't have access to client transaction data. Fee collection must be through our bank account only—no cash transactions allowed.
                <br /><br />
                Transactions to maintain and record include:
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>Cash transactions over ₹10 lakhs or equivalent in foreign currency</li>
                  <li>Series of connected cash transactions below ₹10 lakhs within one calendar month</li>
                  <li>All suspicious transactions</li>
                </ul>
                <br />
                Any suspicious transactions will be immediately notified to the Compliance Officer. Compliance staff will have timely access to customer identification data and transaction records.
                <br /><br />
                The Principal Officer will be responsible for timely submission of CTR and STR to FIU-IND:
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>Maintain utmost confidentiality</li>
                  <li>Transmit reports by speed/registered post/fax</li>
                  <li>Report nil if no cash/suspicious transactions</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Reporting to FIU-IND */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">9.1</div>
              <h2 className="text-2xl font-bold text-gray-900">Reporting to FIU -- India</h2>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700">
                In terms of PMLA rules, we report information relating to cash and suspicious transactions to:
                <br /><br />
                <strong>Director, FIU -- IND</strong><br />
                Financial Intelligence Unit India<br />
                6th floor, Hotel Samrat Chanakyapuri<br />
                New Delhi -- 110021
              </p>
            </div>
          </div>

          {/* Maintenance of Records */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">10</div>
              <h2 className="text-2xl font-bold text-gray-900">Maintenance of Records</h2>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700">
                All client records are maintained for a minimum period of 5 years or until resolution of any regulatory action.
              </p>
            </div>
          </div>

          {/* Audit */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">11</div>
              <h2 className="text-2xl font-bold text-gray-900">Audit</h2>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-700">
                As per regulation 25(3) of RA Regulations, Gaurav Kulkarni shall:
                <ol className="list-decimal pl-8 mt-3 space-y-2">
                  <li>Complete annual compliance audit within six months from end of each financial year</li>
                  <li>Submit compliance audit report to RAASB/SEBI within one month from audit report date</li>
                  <li>Submit adverse findings along with action taken to RAASB/SEBI within one month but not later than October 31st</li>
                  <li>Maintain annual certificate from ICAI/ICSI/ICMAI or auditor confirming compliance</li>
                </ol>
                <br />
                We shall publish the status of the compliance audit report and any adverse findings with action taken on our website. The compliance audit report will be provided to clients.
              </p>
            </div>
          </div>

          {/* Role of Staff */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">12</div>
              <h2 className="text-2xl font-bold text-gray-900">Role of Staff</h2>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-700">
                Gaurav Kulkarni is an Individual Research Analyst. All roles are the responsibility of Gaurav Kulkarni.
                <br /><br />
                <strong>Principal Officer Responsibilities:</strong>
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>Communicating AML policy to employees</li>
                  <li>Receiving suspicious activity reports</li>
                  <li>Clarifying employee queries</li>
                  <li>Ensuring staff awareness and compliance</li>
                  <li>Reporting suspicious transactions</li>
                  <li>Handling compliance functions</li>
                  <li>Evaluating processes for gaps</li>
                </ul>
                <br />
                <strong>On-Boarding Staff Responsibilities:</strong>
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>Primary compliance responsibility</li>
                  <li>Carrying out KYC/CDD processes</li>
                  <li>Reporting any suspicious activity</li>
                </ul>
              </p>
            </div>
          </div>

          {/* Communication of Policy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">13</div>
              <h2 className="text-2xl font-bold text-gray-900">Communication of Policy</h2>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                Copy of policy provided to all relevant staff. Annual awareness session conducted in 1st week of April.
              </p>
            </div>
          </div>

          {/* Compliance */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">14</div>
              <h2 className="text-2xl font-bold text-gray-900">Compliance with Relevant Statutory and Regulatory Requirements</h2>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700">
                Ensure activities comply with all relevant statutory and regulatory requirements.
              </p>
            </div>
          </div>

          {/* Cooperation */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">15</div>
              <h2 className="text-2xl font-bold text-gray-900">Co-operation with the Relevant Law Enforcement Authorities</h2>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700">
                Share appropriate client information with law enforcement authorities as required.
              </p>
            </div>
          </div>

          {/* Policy Review */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">16</div>
              <h2 className="text-2xl font-bold text-gray-900">Review of Policy and Procedures</h2>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-700">
                Management to review policies and procedures on prevention of ML & TF to ensure effectiveness, especially when regulatory guidelines change.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">17</div>
              <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
            </div>
            <div className="bg-gray-50 p-5 text-gray-600 rounded-lg border-l-4 border-gray-500">
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