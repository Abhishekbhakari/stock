import Navbar from '@/components/navbar';
import Footer from "@/components/footer";
import React from 'react';


const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      < Navbar/>
      {/* <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md mr-4">
              <span className="text-yellow-500 font-bold text-xl">GSK</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Gaurav Shriram Kulkarni</h1>
          </div>
          <div className="text-right">
            <p className="text-gray-900 font-semibold">SEBI Registered Research Analyst</p>
            <p className="text-sm text-gray-800">Reg. No: INH000009311 | BSE Enlistment: 5534</p>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 ">
        {/* Document Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-4 border-yellow-300 relative">
          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            Version 1.0
          </div>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
              
            </div>
            <div className="bg-gray-200 w-24 h-32 border border-dashed rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Document Seal</span>
            </div>
          </div>
          
          <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6"></div>
          
          <div className="bg-yellow-50 p-5 rounded-lg text-black border-l-4 border-yellow-500 mb-6">
            <p className="font-medium">
              <strong className="text-gray-900">GAURAV SHRIRAM KULKARNI</strong> ("Research Analyst" or 'RA"), is SEBI Registered Research Analyst bearing Registration No. INH000009311, enlisted with Research Analyst Administration and Supervisory Body (RAASB)- BSE Limited having its Enlistment No. as <strong className="text-gray-900">5534</strong>.
            </p>
            <p className="mt-3">
              Pursuant to SEBI (Research Analysts) Regulations, 2014, applicable Guidelines, Master Circular and circulars issued thereunder, RA is hereby disclosing below <strong className="text-gray-900">Terms & Conditions and Undertakings</strong>:
            </p>
            <p className="mt-3">
              This document outlines the mandatory terms and conditions governing the relationship between the <strong className="text-gray-900">client</strong> (as detailed in <strong className="text-gray-900">Schedule 1</strong>) and the Research Analyst (RA). By subscribing to or availing of research services provided by the RA, the client confirms their acceptance of these terms and conditions at their sole discretion.
            </p>
          </div>
        </div>

        {/* Document Sections */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          {/* Section 1 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Research Services</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>The client confirms that he/she has elected to subscribe the research service of the RA at his/her sole discretion.</li>
              <li>The RA confirms that the research services rendered shall be in accordance with the applicable provisions as outlined in the SEBI (Research Analysts) Regulations, 2014 (RA Regulations).</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
              <h2 className="text-2xl font-bold text-gray-900">Obligations on RA and Client</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>Both the RA and the client shall be bound by SEBI Act, RA Regulations, and all the applicable regulations, rules, and notifications issued by SEBI or the Government of India, as may be in force from time to time.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
              <h2 className="text-2xl font-bold text-gray-900">Client Information and KYC Requirements</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>The client agrees to provide complete and accurate information as required by the RA for Know Your Customer (KYC) compliance, including any details as mandated by SEBI or RAASB from time to time.</li>
              <li>The RA will collect, store, upload and verify KYC records in accordance with SEBI guidelines through a KYC Registration Agency (KRA) as specified from time to time.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
              <h2 className="text-2xl font-bold text-gray-900">Standard Terms of Service</h2>
            </div>
            <p className="font-medium mb-4">By subscribing to the research services, <strong className="text-gray-900">the client</strong> confirms the following:</p>
            <ol className="list-decimal pl-8 space-y-3 text-gray-700">
              <li><em>"I/We have read and understood the terms and conditions applicable to a research analyst as defined under regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure."</em></li>
              <li><em>"I/We are subscribing to the research services for our own benefits and consumption, and any reliance placed on the research report provided by research analyst shall be as per our own judgement and assessment of the conclusions contained in the research report."</em></li>
              <li>
                <em>"I/We understand that --</em>
                <ol className="list-decimal pl-8 mt-2 space-y-2">
                  <li><em>Any investment made based on the recommendations in the research report are subject to market risk.</em></li>
                  <li><em>Recommendations in the research report do not provide any assurance of returns.</em></li>
                  <li><em>There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report"</em></li>
                </ol>
              </li>
            </ol>

            <p className="font-medium mt-6 mb-4">By agreeing to render the research services, <strong className="text-gray-900">the RA</strong> declares the following:</p>
            <ol className="list-decimal pl-8 space-y-3 text-gray-700">
              <li>
                <em>It is duly registered with SEBI as an RA under the SEBI (Research Analysts) Regulations, 2014 and its registration details are --</em>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li><em>Registration number- INH000009311</em></li>
                  <li><em>Registration date- March 31, 2022</em></li>
                </ul>
              </li>
              <li><em>It has registration and the qualifications required to render the research services as contemplated under the RA Regulations and the same are valid and subsisting;</em></li>
              <li><em>The services provided do not conflict with or violate any applicable law or agreement.</em></li>
              <li><em>The maximum fee charged by the RA is ₹1.51 lakhs per annum per family of clients.</em></li>
              <li><em>Recommendations provided by the RA do not provide any assurance of returns.</em></li>
              <li><em>RA is not engaged in any other professional or business activity that could compromise the independence or objectivity of their research services.</em></li>
            </ol>
          </div>

          {/* Section 6 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">6</div>
              <h2 className="text-2xl font-bold text-gray-900">Fees and Payment Terms</h2>
            </div>
            <div className="bg-yellow-50 p-5 text-gray-900 rounded-lg border border-yellow-200">
              <p className="mb-3">The client agrees to pay the fees for the research services as mutually agreed upon, along with applicable statutory charges. The Scope of service and fee details are enclosed as <strong className="text-gray-900">Annexure 1</strong>.</p>
              <p className="mb-3">The subscription fees shall be paid in advance, provided the advance amount is not more than that for a period one year only, as permitted by SEBI.</p>
              <p className="mb-3">Fees shall be payable by way of direct credit to the designated bank account/s through channels like Net Banking/Debit Card/NEFT/ RTGS/ IMPS/ UPI/ eNACH mandate/ any other acceptable mode as per the RA regulations. Payment may also be processed though payment gateway services opted by RA from time to time. The fees shall not be accepted in cash.</p>
              <p>An Option of payment through SEBI authorised 'Centralised Fee Collection Mechanism (CeFCoM) is available with every investor. If client likes to opt for 'Centralised Fee Collection Mechanism (CeFCoM)', an email request for the same may be sent to RA for processing of same.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">7</div>
              <h2 className="text-2xl font-bold text-gray-900">Risk Factors</h2>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <ul className="list-disc pl-8 space-y-3 text-gray-700">
                <li>Investments in securities carry inherent market risks, including potential loss of capital.</li>
                <li>Historical performance of recommendations is not indicative of future returns.</li>
                <li>The client must independently assess the suitability of investment decisions based on the research reports provided.</li>
                <li><strong className="text-gray-900">Registration granted by SEBI/ BSE, and certification from NISM in no way guarantee performance of the RA (intermediary) or provide any assurance of returns to the clients.</strong></li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">8</div>
              <h2 className="text-2xl font-bold text-gray-900">Conflict of Interest</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>The RA shall comply with all the applicable regulations/ circulars/ directions as specified by SEBI from time to time in relation to disclosure and mitigation of any actual or potential conflicts of interest.</li>
              <li>Any actual or potential conflict of interest will be disclosed transparently to the client as and when identified. Disclosures with respect to material information of the RA is described in <strong className="text-gray-900">Annexure 2</strong>.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">9</div>
              <h2 className="text-2xl font-bold text-gray-900">Termination of Services and Refunds</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>The RA reserves the right to suspend or terminate services in the event of suspension or cancellation of their SEBI registration and</li>
              <li>In case of cancellation of SEBI Registration, RA shall refund the pro-rata fees for the remaining subscription period to the client on suspension or termination of services.</li>
              <li>In case of Suspension of certificate of registration for more than 60 (sixty) days, RA shall refund the pro-rata fees for the remaining subscription period to the client on suspension or termination of services.</li>
              <li>Remaining subscription period shall be period from the effective date of cancellation/ suspension to end of the subscription period.</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">10</div>
              <h2 className="text-2xl font-bold text-gray-900">Grievance Redressal and Dispute Resolution</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>Clients may escalate grievances related to deficiencies in services as mentioned below to the RA's designated person-
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Non-receipt of research report, or</li>
                  <li>Missing pages or inability to download the entire report, or</li>
                  <li>Any other deficiency in the research services provide by RA</li>
                </ul>
              </li>
              <li>Contact details of designated person for escalation of grievances are as below-
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Name- Gaurav Shriram Kulkarni</li>
                  <li>Email- <a href="mailto:researchanalyst92@gmail.com" className="text-blue-600 hover:underline">researchanalyst92@gmail.com</a></li>
                </ul>
              </li>
              <li>RA shall redress grievances of the client in a timely and transparent manner.</li>
              <li>RA shall resolve grievances within seven business working days or as specified by SEBI under RA Regulations.</li>
              <li>In case you are not satisfied with our response you can lodge your grievance with SEBI at <a href="https://scores.sebi.gov.in/" className="text-blue-600 hover:underline">https://scores.sebi.gov.in/</a> or you may also write to any of the offices of SEBI. SCORES may be accessed thorough SCORES mobile application as well, same can be downloaded from below link:
                <br />
                <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" className="text-blue-600 hover:underline">https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330</a>
              </li>
              <li>Disputes between the RA and the client may be resolved through arbitration or any other modes or mechanism as specified by SEBI from time to time.</li>
            </ul>
            <p className="mt-4 text-gray-700">ODR Portal could be accessed, if unsatisfied with the response. Your attention is drawn to the SEBI circular no. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, on "Online Resolution of Disputes in the Indian Securities Market". A common Online Dispute Resolution Portal ("ODR Portal") which harnesses conciliation and online arbitration for resolution of disputes arising in the Indian Securities Market has been established. ODR Portal can be accessed via the following link - <a href="https://smartodr.in/" className="text-blue-600 hover:underline">https://smartodr.in/</a></p>
          </div>

          {/* Section 11 */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">11</div>
              <h2 className="text-2xl font-bold text-gray-900">Mandatory Notices</h2>
            </div>
            <p className="text-gray-700">Clients are advised and requested to familiarize themselves with SEBI's guidelines, including the Do's and Don'ts while dealing with RAs, as specified in SEBI's Master Circular No. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024, or as updated by SEBI from time to time.</p>
            <p className="mt-3 text-gray-700">Link to Master circular for reference- <a href="https://www.sebi.gov.in/sebi_data/attachdocs/may-2024/1716290553655.pdf" className="text-blue-600 hover:underline">https://www.sebi.gov.in/sebi_data/attachdocs/may-2024/1716290553655.pdf</a></p>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">13</div>
              <h2 className="text-2xl font-bold text-gray-900">Most Important Terms and Conditions (MITC)</h2>
            </div>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>These terms and conditions, and consent thereon are for the research services provided by the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell transaction) on behalf of, the client. Thus, the clients are advised not to permit RA to execute any trade on their behalf.</li>
              <li>The fee charged by RA to the client will be subject to the maximum of amount prescribed by SEBI/ Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients).</li>
            </ul>

            <div className="bg-yellow-50 p-5 text-gray-900 rounded-lg mt-4 border border-yellow-200">
              <p className="font-semibold text-gray-900 mb-2">Note:</p>
              <p className="mb-2">2.1. The current fee limit is Rs 1,51,000/- per annum per family of client for all research services of the RA.</p>
              <p className="mb-2">2.2. The fee limit does not include statutory charges.</p>
              <p>2.3. The fee limits do not apply to a non-individual client / accredited investor.</p>
            </div>

            <ul className="list-disc pl-8 space-y-3 text-gray-700 mt-6">
              <li>RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI; presently it is one year. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for unexpired period.</li>
              <li>Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB).</li>
              <li>The RA is required to abide by the applicable regulations/ circulars/ directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavour to promptly inform the client of any conflict of interest that may affect the services being rendered to the client.</li>
              <li>Any assured/guaranteed/fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA.</li>
              <li>The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA's research services. All opinions, projections, estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of research report.</li>
              <li>Any investment made based on recommendations in research reports are subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client's own judgement and assessment of the conclusions contained in the research report.</li>
              <li>The SEBI registration, Enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client.</li>
              <li>For any grievances,
                <p className="mt-2 font-medium">Step 1: The client should first contact the RA using the details on its website or following contact details:</p>
                <div className="bg-gray-100 p-4 rounded-md mt-2">
                  <p>Name: Gaurav Shriram Kulkarni</p>
                  <p>Email: <a href="mailto:researchanalyst92@gmail.com" className="text-blue-600 hover:underline">researchanalyst92@gmail.com</a></p>
                  <p>Ph No: 9970664299</p>
                </div>
                <p className="mt-2 font-medium">Step 2: If the resolution is unsatisfactory, the client can also lodge grievances through SEBI's SCORES platform at <a href="http://www.scores.sebi.gov.in" className="text-blue-600 hover:underline">www.scores.sebi.gov.in</a></p>
                <p className="font-medium">Step 3: The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at <a href="https://smartodr.in" className="text-blue-600 hover:underline">https://smartodr.in</a></p>
              </li>
              <li>Clients are required to keep contact details, including email id and mobile number/s updated with the RA at all times.</li>
              <li>The RA shall never ask for the client's login credentials and OTPs for the client's Trading Account Demat Account and Bank Account. Never share such information with anyone including RA.</li>
            </ul>
          </div>
        </div>

        {/* Schedule 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">S1</div>
            <h2 className="text-2xl font-bold text-gray-900">Schedule 1</h2>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">DETAILS OF CLIENT</h3>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <table className="w-full text-black">
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="font-medium p-4 border-r border-gray-200">Full Name</td>
                    <td className="p-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Entity Type</td>
                    <td className="p-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Authorised Signatory (in case of non-individual)</td>
                    <td className="p-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Email ID</td>
                    <td className="p-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Mobile No.</td>
                    <td className="p-4"></td>
                  </tr>
                  <tr>
                    <td className="font-medium p-4 border-r border-gray-200">PAN</td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">DETAILS OF RESEARCH ANALYST</h3>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <table className="w-full text-black">
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-100">
                    <td className="font-medium p-4 border-r border-gray-200">Name of RA</td>
                    <td className="p-4">Gaurav Shriram Kulkarni</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Entity Type</td>
                    <td className="p-4">Individual</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Registration No.:</td>
                    <td className="p-4">INH000009311</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">BSE Enlistment No.:</td>
                    <td className="p-4">5534</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Trade Name:</td>
                    <td className="p-4">Gaurav Shriram Kulkarni</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Residential/ Registered Address:</td>
                    <td className="p-4">Flat no 506, A wing, Kesar valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="font-medium p-4 border-r border-gray-200">Contact No.:</td>
                    <td className="p-4">9970664299</td>
                  </tr>
                  <tr>
                    <td className="font-medium p-4 border-r border-gray-200">Email No.:</td>
                    <td className="p-4"><a href="mailto:researchanalyst92@gmail.com" className="text-blue-600 hover:underline">researchanalyst92@gmail.com</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Annexure 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">A1</div>
            <h2 className="text-2xl font-bold text-gray-900">Annexure 1</h2>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Scope of Service and Fee Schedule</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Scope of Service</h4>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>The Research Analyst (RA) is engaged solely in providing independent and professional research and analytical insights on financial markets, securities, and investment strategies. Our role is strictly limited to offering informed opinions, investment ideas, and market commentary based on publicly available information and reasonable due diligence. The RA does not engage in portfolio management, trading, or personalized financial planning services.</li>
              <li>The RA does not execute trades on behalf of clients, nor do we have access to or hold any client funds or securities. Clients are solely responsible for the execution of any trades or investment decisions based on the research reports or recommendations provided. All transactions must be carried out through duly authorized intermediaries such as stockbrokers or investment advisors.</li>
              <li>Investments in securities are subject to market risks including the potential loss of principal. The RA does not guarantee or assure any specific return, profit, or outcome from any investment action taken based on our research. Past performance of any stock, index, or strategy discussed is not indicative of future performance. Clients are urged to exercise independent judgment and consult with their financial advisors before making any investment decisions.</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Validity of Service</h4>
            <div className="border border-dashed border-gray-400 rounded-lg p-4 inline-block">
              <p className="text-gray-700">DD/MM/YYYY TO DD/MM/YYYY</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Fee Schedule</h4>
            <div className="border border-dashed border-gray-400 rounded-lg p-4 inline-block">
              <p className="text-gray-700">RS ----/-</p>
            </div>
          </div>
          
          <p className="mt-6 text-gray-700 font-medium"><strong>Neither any research service will be rendered, nor any fee will be charged until consent is received from client on these terms and condition.</strong></p>
        </div>

        {/* Annexure 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-center mb-6">
            <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">A2</div>
            <h2 className="text-2xl font-bold text-gray-900">Annexure 2</h2>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Disclosure Document</h3>
          
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-3">A. Descriptions about "Research Analyst"</h4>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>
                <strong className="text-gray-900">History, Present business and Background</strong>
                <p className="mt-2">Research Analyst is registered with SEBI as Research Analyst with Registration No. INH000009311, BSE Membership No. 5534. The firm got its registration on Mar 31, 2022 and is engaged in research and recommendation Services.</p>
                <p className="mt-2">The focus of Research Analyst is to provide research and recommendations services to the clients. Analyst aligns its interests with those of the client and seeks to provide the best suited services.</p>
              </li>
              <li>
                <strong className="text-gray-900">Terms and conditions of Research and Recommendation Services</strong>
                <p className="mt-2">Terms and conditions of Research and Recommendation Services are detailed in the terms and condition document. Please refer to the same for details.</p>
              </li>
              <li>
                <strong className="text-gray-900">Disciplinary history</strong>
                <ol className="list-decimal pl-8 mt-2 space-y-1">
                  <li>No penalties have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.</li>
                  <li>There are no pending material litigations or legal proceedings, findings of inspections or investigations for which action has been taken or initiated by any regulatory authority against the Research Analyst or its employees.</li>
                </ol>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Details of its associates</p>
            <p>No associates</p>
          </div>
          
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-3">B. Disclosures with respect to Research and Recommendations Services</h4>
            <ul className="list-disc pl-8 space-y-3 text-gray-700">
              <li>Research Analyst or his associate or his relative may have financial interest or actual / beneficial ownership of one per cent or more in the securities recommended in its personal portfolio at the end of the month immediately preceding the date of publication of the research report or date of the public appearance. Details of the same may be referred through the disclosures made at the time of advice.</li>
              <li>There are no actual or potential conflicts of interest arising from any connection of Research Analyst or his associate or his relative to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.</li>
              <li>Research Analyst or its associates have not received any compensation from the subject company in past 12 months.</li>
              <li>Research Analyst or its employee or its associates have not managed or co-managed the public offering of Subject Company in past 12 months.</li>
              <li>Research Analyst or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company in past 12 months.</li>
              <li>Research Analyst or its employee or its associates have not received any compensation or other benefits from the subject company or third party in connection with the research report or research recommendations.</li>
              <li>Research Analyst or its associates have not received any compensation for products or services from the subject company in past 12 months.</li>
              <li>Research Analyst or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.</li>
              <li>The subject company was not a client of Research Analyst or its associates during twelve months preceding the date of distribution of the research report and recommendation services provided.</li>
              <li>Research Analysts or its associates has not served as an officer, director or employee of the subject company.</li>
              <li>Research Analysts has not been engaged in market making activity of the subject company</li>
              <li>The research analyst is not using/ using artificial intelligence tools for preparation of the research report.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">C. Statutory Disclaimers:</h4>
            <div className="bg-yellow-100 p-5 rounded-lg border-2 border-yellow-300">
              <p className="text-center font-bold text-gray-900">
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <Footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-900 font-bold">GSK</span>
                </div>
                <h3 className="text-xl font-bold">Gaurav Shriram Kulkarni</h3>
              </div>
              <p className="mt-2 text-gray-400">SEBI Registered Research Analyst</p>
              <p className="text-gray-400">Reg. No: INH000009311 | BSE Enlistment: 5534</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">Contact: researchanalyst92@gmail.com | 9970664299</p>
              <p className="text-gray-400 mt-2">Address: Flat no 506, A wing, Kesar valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062</p>
              <p className="text-gray-400 mt-2">© {new Date().getFullYear()} Gaurav Shriram Kulkarni. All rights reserved.</p>
            </div>
          </div>
        </div>
       <Footer /> */}
       <Footer/>
    </div>
  );
};

export default TermsAndConditions;