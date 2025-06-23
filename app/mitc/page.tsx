import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MostImportantTermsandConditions() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121421]">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Most Important Terms and Conditions (MITC)</h1>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-6 text-gray-700">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                These terms and conditions, and consent thereon are for the research services provided by the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell transaction) on behalf of, the client. Thus, the clients are advised not to permit RA to execute any trade on their behalf.
              </li>
              <li>
                The fee charged by RA to the client will be subject to the maximum of amount prescribed by SEBI/ Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients).
              </li>
            </ul>

            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-semibold">Note:</p>
              <p>2.1. The current fee limit is Rs 1,51,000/- per annum per family of client for all research services of the RA.</p>
              <p>2.2. The fee limit does not include statutory charges.</p>
              <p>2.3. The fee limits do not apply to a non-individual client / accredited investor.</p>
            </div>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI; presently it is one year. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for unexpired period.
              </li>
              <li>
                Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB).
              </li>
              <li>
                The RA is required to abide by the applicable regulations/ circulars/ directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavour to promptly inform the client of any conflict of interest that may affect the services being rendered to the client.
              </li>
              <li>
                Any assured/guaranteed/fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA.
              </li>
              <li>
                The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA's research services. All opinions, projections, estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of research report.
              </li>
              <li>
                Any investment made based on recommendations in research reports are subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client's own judgement and assessment of the conclusions contained in the research report.
              </li>
              <li>
                The SEBI registration, Enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client.
              </li>
              <li>
                For any grievances,
                <div className="mt-2">
                  <p className="font-semibold">Step 1:</p>
                  <p className="ml-4">The client should first contact the RA using the details on its website or following contact details:</p>
                  <div className="bg-gray-100 p-4 rounded-md ml-4 mt-2">
                    <p>Name: Gaurav Shriram Kulkarni</p>
                    <p>Email: <a href="mailto:researchanalyst92@gmail.com" className="text-blue-600">researchanalyst92@gmail.com</a></p>
                    <p>Phone No: 9970664299</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Step 2:</p>
                  <p className="ml-4">If the resolution is unsatisfactory, the client can also lodge grievances through SEBI's SCORES platform at <a href="http://www.scores.sebi.gov.in" className="text-blue-600">www.scores.sebi.gov.in</a></p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Step 3:</p>
                  <p className="ml-4">The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at <a href="https://smartodr.in" className="text-blue-600">https://smartodr.in</a></p>
                </div>
              </li>
              <li>
                Clients are required to keep contact details, including email id and mobile number/s updated with the RA at all times.
              </li>
            </ul>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="font-semibold">Important Security Notice:</p>
              <p>The RA shall never ask for the client's login credentials and OTPs for the client's Trading Account, Demat Account and Bank Account. Never share such information with anyone including RA.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}