import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function InvestorCharter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto py-10 px-4 max-w-5xl">
        {/* Creative Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 pt-8">Grievance Redressal Mechanism</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to resolving your concerns promptly and effectively
          </p>
        </div>

        {/* Grievance Procedure Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-300 relative">
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
          
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
            <h2 className="text-2xl font-bold text-gray-900">Grievance Redressal Procedure</h2>
          </div>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p>
                <strong className="text-gray-900">Dear Investor,</strong>
                <br />
                Client's queries/complaints may arise due to lack of understanding, or a deficiency of service experienced by clients. Deficiency of service may include lack of explanation, clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards client.
              </p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-gray-900 mb-2">
                In case of any grievance/complaint against the research analyst Gaurav Kulkarni:
              </p>
              
              <ul className="list-disc pl-8 space-y-3 mt-3">
               
                
                <li className="mt-4">
                  You may approach Proprietor/Research Analyst (<strong>Gaurav Kulkarni</strong>) at:
                  <div className="mt-3 ml-4 p-4 bg-gray-100 rounded-lg">
                    <p>
                      Email: <a href="mailto:ashish.arole@gmail.com" className="text-blue-600 hover:underline">researchanalyst92@gmail.com</a>
                    </p>
                    <p>Phone:"9970664299",</p>
                    <p className="mt-2 text-sm italic">
                      If you do not receive a response within 10 business days of contacting the Compliance Officer/Servicing Team. The client can expect a reply within 10 business days of approaching research analyst.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700">
                  <strong>Note:</strong> Below is the detailed Grievance Redressal / Escalation Matrix for your reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 relative">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Grievance Redressal Contact Details
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border border-gray-300">Details of Designation</th>
                  <th className="px-6 py-3 border border-gray-300">Contact Person Name</th>
                  <th className="px-6 py-3 border border-gray-300">Address</th>
                  <th className="px-6 py-3 border border-gray-300">Contact No.</th>
                  <th className="px-6 py-3 border border-gray-300">Email-ID</th>
                  <th className="px-6 py-3 border border-gray-300">Working Hours</th>
                </tr>
              </thead>
<tbody>
  {[
    [
      "Customer Care",
      "Gaurav Kulkarni",
      "Flat No 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune - 411062",
      "9970664299",
      "researchanalyst92@gmail.com",
      "10:00 AM to 5:00 PM",
    ],
    [
      "Head of the Customer Care",
      "Gaurav Kulkarni",
      "Flat No 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune - 411062",
      "9970664299",
      "researchanalyst92@gmail.com",
      "10:00 AM to 5:00 PM",
    ],
    [
      "Compliance Officer",
      "Gaurav Kulkarni",
      "Flat No 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune - 411062",
      "9970664299",
      "researchanalyst92@gmail.com",
      "10:00 AM to 5:00 PM",
    ],
    [
      "CEO",
      "Gaurav Kulkarni",
      "Flat No 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune - 411062",
      "9970664299",
      "researchanalyst92@gmail.com",
      "10:00 AM to 5:00 PM",
    ],
    [
      "Principal Officer",
      "Gaurav Kulkarni",
      "Flat No 506, A wing, Kesar Valley, Patil Nagar, Chikhali, Pune - 411062",
      "9970664299",
      "researchanalyst92@gmail.com",
      "10:00 AM to 5:00 PM",
    ],
  ].map((row, index) => (
    <tr
      key={index}
      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50`}
    >
      <td className="px-6 py-4 border border-gray-300 font-medium">{row[0]}</td>
      <td className="px-6 py-4 border border-gray-300">{row[1]}</td>
      <td className="px-6 py-4 border border-gray-300">{row[2]}</td>
      <td className="px-6 py-4 border border-gray-300">{row[3]}</td>
      <td className="px-6 py-4 border border-gray-300">
        <a href={`mailto:${row[4]}`} className="text-blue-600 hover:underline">{row[4]}</a>
      </td>
      <td className="px-6 py-4 border border-gray-300">{row[5]}</td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
          
          <div className="mt-8 bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700">
                  For unresolved grievances, investors may approach SEBI through the SCORES portal at 
                  <a href="https://scores.sebi.gov.in" className="text-blue-600 hover:underline ml-1">https://scores.sebi.gov.in</a>. 
                  SCORES facilitates tracking the status of the complaint. For any queries, feedback or assistance, please contact SEBI Office on Toll Free Helpline at 1800 22 7575 / 1800 266 7575
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resolution Timeline */}


        {/* Commitment Section */}
        <section className="mb-12 bg-yellow-50 p-8 rounded-xl shadow-lg border-2 border-yellow-300">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We are dedicated to resolving your concerns promptly and fairly. Your satisfaction is our priority, and we strive to maintain the highest standards of service and transparency in all our interactions.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}