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
                  Placement is the initial stage in which money from criminal activities is placed in financial institutions. One of the most common methods is structuring—breaking up currency transactions into portions below reporting threshold for the specific
purpose of avoiding reporting or recordkeeping requirements.

                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">Layering</h3>
                <p className="text-gray-700">
                  Layering is the process of conducting a complex series of financial transactions, with the
purpose of hiding the origin of money from criminal activity and hindering any attempt to trace
the funds. This stage can consist of multiple securities trades, purchases of financial products
such as life insurance or annuities, cash transfers, currency exchanges, or purchases of
legitimate businesses.

                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-700">
                  Integration is the final stage in the re-injection of the laundered proceeds back into the economy
in such a way that they re-enter the financial system as normal business funds. Banks and
financial intermediaries are vulnerable from the Money Laundering point of view since criminal
proceeds can enter banks in the form of large cash deposits.

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
              <p className="text-gray-700 mb-4">
              The policy and procedures as outlined below provide a general background on the subjects of money laundering and terrorist financing, summarize the main provisions of the applicable anti-money laundering and anti-terrorist financing legislation in India, and provide guidance on the practical implications of the Act. The same also sets out the steps that a registered intermediary and any of its representatives should implement to discourage and identify any money laundering or terrorist financing activities.
              </p>
              <p className="text-gray-700 mb-4">
              The Prevention of Money Laundering Act, 2002 has come into effect from 1st July 2005. Necessary Notifications / Rules under the said Act have been published in the Gazette of India on 1st July 2005 by the Department of Revenue, Ministry of Finance, Government of India.
              </p>
              <p className="text-gray-700 mb-4">
              As per the provisions of the Act, every banking company, financial institution (which includes chit fund company, a co-operative bank, a housing finance institution and a non-banking financial company) and intermediary (which includes a stock-broker, sub-broker, share transfer agent, banker to an issue, trustee to a trust deed, registrar to an issue, merchant banker, underwriter, portfolio manager, investment adviser and any other intermediary associated with securities market and registered under section 12 of the Securities and Exchange Board of India Act, 1992) shall have to maintain a record of all the transactions; the nature and value of which has been prescribed in the Rules under the PMLA.
              </p>
              <p className="text-gray-700 mb-2">
              Such transactions include:
              </p>
              <ul className="list-disc pl-8 mb-4 text-gray-800 space-y-2">
              <li>All cash transactions of the value of more than ₹10 lakhs or its equivalent in foreign currency.</li>
              <li>All series of cash transactions integrally connected to each other which have been valued below ₹10 lakhs or its equivalent in foreign currency where such series of transactions take place within one calendar month.</li>
              <li>All suspicious transactions whether or not made in cash and including, inter-alia, credits or debits into/from any non-monetary account such as demat account, security account maintained by the registered intermediary.</li>
              </ul>
              <p className="text-gray-700 mb-4">
              We will adopt the below procedures to implement the anti-money laundering provisions as envisaged under the Anti Money Laundering Act, 2002. These procedures include inter alia the following three specific parameters including two which are related to the overall <br /> ‘Client Due Diligence Process’:
              </p>
              <ol className="list-decimal pl-8 mb-4 text-gray-800 space-y-2">
              <li>Policy for acceptance of clients</li>
              <li>Procedure for identifying the clients</li>
              <li>Transaction monitoring and reporting especially Suspicious Transactions Reporting (STR)</li>
              </ol>
              <p className="text-gray-700">
              Please note that the words client/customer/subscriber have been used interchangeably in this document. All mean the same thing i.e. paid customers availing our research services.
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
              <p className="text-gray-700 mb-4">
                Please note that this policy is only applicable for client on boarding with us.<br /><br />
                The Customer Due Diligence (“CDD”) measures comprise the following:<br />
                Obtaining sufficient information in order to identify persons who beneficially own or control securities account<br /><br />
                Gaurav Kulkarni, SEBI Registered Research Analyst(INH000009311) provides non-discretionary research recommendation service, execution of which is on the discretion of the client, and execution is handled by client themselves.<br />
                Transaction data is not handled by us and clients do not share any executional or transactional data with us.<br /><br />
                Accordingly, identifying the beneficial owner or controlling party of the securities account of the client is not possible for us and remains the responsibility of the broker handling the security account of the client.<br /><br />
                <strong>Verify the Customer’s Identity</strong><br />
                As provided under Regulation 25(1) of RA Regulations, RA or research entity shall follow the KYC procedure for their fee paying clients and maintain KYC records for their clients as specified by SEBI from time to time.<br />
                When any new client registers with us, we collect their PAN and Date of Birth. Using this information, we can verify KYC status of the client.<br />
                Only Clients with KYC status as “KYC Validated” or “KYC Registered” can make payments for our research services.<br />
                There may be instances of the KYC status being different in the above agencies. In this case as long as one of the report shows KYC Validated or KYC Registered, it is considered okay.<br />
                We will verify the KYC status on CVL KRA using just the PAN and store the screenshot of the KYC Record.<br /><br />
                Gaurav Kulkarni, SEBI Registered research analyst adopts a comprehensive Client On boarding Procedure to verify the customers identify before accepting the customer and granting necessary access.<br />
                Please refer to the Customer On boarding Policy in the Internal Policies and Procedures document.
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
              <p className="text-gray-700 mb-4">
              The only transaction encountered while delivering the service is collection of fees as we don’t have access to the execution of transaction data of the clients. Accordingly, the fee collection should be through our bank account only. Further, no cash transaction should be allowed for fee payment by the clients.
              </p>
              <p className="text-gray-700 mb-2">
              The nature and value of transactions, which has been prescribed in the Rules under the PMLA to maintain and record includes:
              </p>
              <ul className="list-disc pl-8 mb-4 text-gray-800 space-y-2">
              <li>All cash transactions of the value of more than Rs 10 lacs or its equivalent in foreign currency.</li>
              <li>All series of cash transactions integrally connected to each other which have been valued below Rs 10 lakhs or its equivalent in foreign currency where such series of transactions take place within one calendar month.</li>
              <li>All suspicious transactions whether or not made in cash and including, inter-alia, credits or debits into from any non-monetary account such as demat account, security account maintained by the registered intermediary.</li>
              </ul>
              <p className="text-gray-700 mb-4">
              Any suspicious transactions will be immediately notified to the Compliance Officer. The notifications may be done in the form of a detailed report with specific references to the clients, transactions and the nature/reason of suspicion. The compliance staff members will have timely access to customer identification data and other CDD information, transaction records and other relevant information.
              </p>
              <p className="text-gray-700 mb-4">
              Compliance Officer will carefully go through all the reporting requirements and formats as per the provision of PMLA.
              </p>
              <p className="text-gray-700 mb-2">
              The Principal Officer will be responsible for timely submission of CTR and STR to FIU-IND:
              </p>
              <ul className="list-disc pl-8 text-gray-800 space-y-2">
              <li>Utmost confidentiality will be maintained in filling of CTR and STR to FIU- IND.</li>
              <li>The reports will be transmitted by speed/registered post/fax at the notified address.</li>
              <li>No/ Nil reporting will be made to FIU-IND in case there are no cash/suspicious transactions to be reported.</li>
              </ul>
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
                In terms of the PMLA rules, BMWA will report information relating to cash and suspicious
transactions to The Director, Financial Intelligence Unit India (FIU – IND) at the following

                <br />
                address:
                <br />
                <strong>Director,</strong><br />
                 FIU -- IND Financial Intelligence Unit India<br />
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
               All the records of the clients are to be maintained for a minimum period of 5 Years or in case of
any regulatory action till the time the same is resolved.

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
              <p className="text-gray-700 mb-4">
              <br />
              As per regulation 25(3) of the RA Regulations, RA or research entity shall conduct annual audit in
              respect of compliance with RA Regulations. Annual compliance audit report shall specify each
              of the provisions of the RA Regulations and the circulars and guidelines issued thereunder upon
              which compliance is reported.
              </p>
              <p className="text-gray-700 mb-4">
              Gaurav Kulkarni, SEBI Registered Research Analyst (INH000009311) shall -
              <br />
              (i) complete the annual compliance audit within six months from the end of each financial year
              and submit a compliance audit report to RAASB/SEBI within a period of one month from the
              date of the audit report.<br />
              (ii) submit adverse findings of audit, if any, along with action taken thereof duly approved by the
              individual RA or management of non-individual RA or research entity to RAASB/SEBI within a
              period of one month from the date of the audit report but not later than October 31st of each
              year for the previous financial year; and<br />
              (iii) maintain on record an annual certificate from a member of ICAI/ ICSI/ ICMAI or from an
              auditor confirming compliance with client level segregation requirements. Such annual
              certificate shall form part of the compliance audit.
              </p>
              <p className="text-gray-700 mb-4">
              We shall publish the status of the compliance audit report on its website and shall also publish
              the adverse findings of audit, if any, along with the action taken thereof on its website.
              RA/research entity shall provide the compliance audit report to its clients.
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
              <p className="text-gray-700 mb-4">
              Gaurav Kulkarni is an Individual Research Analyst. All these roles though uniquely identified are all<br />
              the responsibility of Gaurav Kulkarni.
              </p>
              <p className="text-gray-700 font-semibold mb-2">Principal Officer</p>
              <p className="text-gray-700 mb-2">
              The Principal Officer is responsible for the following: Communicating the policy on prevention<br />
              of Money laundering to the employees.
              </p>
              <ul className="list-disc pl-8 mb-4 text-gray-800 space-y-2">
              <li>Receiving reports from employees for any suspicious dealing noticed by them.</li>
              <li>Clarification of any queries from employees on this matter.</li>
              <li>Ensuring that the employees dealing with the clients/prospective clients are aware of the<br />
              guidelines and are advised to follow the same strictly.</li>
              <li>Report any suspicious transactions to appropriate authorities. Handle compliance<br />
              function and to ensure compliance with the policies, procedures, and controls relating to<br />
              the prevention of ML and TF</li>
              <li>Evaluate the process in case any gaps are identified</li>
              </ul>
              <p className="text-gray-700 font-semibold mb-2">On-Boarding Staff</p>
              <p className="text-gray-700 mb-2">
              For staff members dealing with customers or handling customer-facing processes, it is<br />
              essential to be sensitive to the AML requirements and obligations
              </p>
              <ul className="list-disc pl-8 text-gray-800 space-y-2">
              <li>Primary responsibility of compliance is on the on-boarding staff since they deal face-to-<br />
              face with customers.</li>
              <li>On-boarding staff to carry out KYC process/ customer due diligence process / any further<br />
              checks required as per our process during new business and renewal</li>
              <li>Default on carrying out obligation under AML law can attract action as per set company<br />
              policies</li>
              <li>If you come to know of any suspicious activity, you have to bring that to our notice</li>
              </ul>
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
                Copy of policy provided to all relevant staff. Annual awareness session conducted in 1st week of April.Copy of above policy is to be provided to all the management and relevant staff that handle
account information, securities transactions, money and client records etc. whether in
branches, departments or subsidiaries;
<br />
<br />
An internal session on awareness of the above policy is to be conducted on a yearly basis in 1st
week of April to spread awareness of the same among all the relevant person(s).


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
                Requirnments : <br />
                It is to be ensured that the activities are in compliance with all the relevant statutory and
regulatory requirements.

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
              As and when sought appropriate information’s of the clients as maintained are to be shared with
the relevant law enforcement authorities and timely disclosures of the information’s to be made
as per the requirement.

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
               The management of the research entity is to review the policies and procedures on the
prevention of ML & TF to ensure their effectiveness as and when there is change in regulatory
guidelines with respect to prevention of ML & TF.

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