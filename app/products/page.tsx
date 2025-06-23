import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121421]">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Investor Charter</h1>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#121421]">A) Vision and Mission Statements for investors</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Vision</h3>
              <p>Invest with knowledge & safety.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Mission</h3>
              <p>
                Every investor should be able to invest in right investment products based on their needs, manage and
                monitor them to meet their goals, access reports and enjoy financial wellness.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md border-spacing-1 border-teal-500">
          <h2 className="text-2xl font-semibold mb-4 text-[#121421]">
            B) Details of business transacted by the Research Analyst with respect to the investors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              We publish research reports based on robust and ethical research activities carried out by our organization.
              All reports are prepared with diligence, ensuring accuracy and relevance for investors.
            </li>
            <li>
              Our research reports and recommendations are independent and free from external influences. We ensure that
              our views on securities are neutral and unbiased to help investors make informed decisions.
            </li>
            <li>
              We conduct an annual audit of our research activities, policies, and procedures to ensure compliance with
              SEBI regulations. The audit findings are documented, and necessary corrective measures are implemented
              promptly.
            </li>
            <li>
              We provide clear disclosures of any financial interests or conflicts of interest in the securities that we
              recommend. These disclosures are prominently included in our reports as per regulatory requirements.
            </li>
            <li>
              All our research recommendations are based on publicly available information and our own observations. We
              comply with all regulations concerning the use of non-public or sensitive information.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#121421]">
            C) Details of services provided to investors (No Indicative Timelines)
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Onboarding of Clients: Clients are onboarded following due diligence and adherence to SEBI guidelines.
            </li>
            <li>
              Fair Distribution of Research Reports: Research reports and recommendations are distributed to all clients
              without discrimination, ensuring equal access to insights and analysis.
            </li>
            <li>
              Confidentiality: We maintain strict confidentiality of research reports until they are made available in the
              public domain, upholding the trust of our clients and compliance standards.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#121421]">
            D) Details of grievance redressal mechanism and how to access it
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              In case of any grievance / complaint, an investor should approach the concerned research analyst and we
              shall ensure that the grievance is resolved within 30 days.
            </li>
            <li>
              If the investor's complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI's
              SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints
              registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the
              status of the complaint.
            </li>
            <li>
              With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance
              and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, 'G' Block, Bandra-Kurla
              Complex, Bandra (E), Mumbai - 400 051.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#121421]">
            E) Expectations from the investors (Responsibilities of investors)
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Do's</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always deal with SEBI registered Research Analyst.</li>
                <li>Check for SEBI registration number.</li>
                <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                <li>
                  Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in
                  the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
                </li>
                <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                <li>
                  Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the
                  details of your payments.
                </li>
                <li>
                  Before buying securities or applying in public offer, check for the research recommendation provided by
                  your research Analyst.
                </li>
                <li>
                  Ask all relevant questions and clear your doubts with your Research Analyst before acting on the
                  recommendation.
                </li>
                <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Don'ts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>Don't fall prey to luring advertisements or market rumours.</li>
                <li>
                  Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research
                  Analyst.
                </li>
                <li>
                  Do not share login credentials and password of your Trading and Demat Account with the Research Analyst.
                </li>
              </ul>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}

