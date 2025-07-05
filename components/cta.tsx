import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative bg-black py-16 md:py-20">
      {/* Navigation Tabs */}
      {/* <div className="container justify-center flex gap-6 text-white text-lg font-semibold uppercase">
        <span className="text-yellow-400 border-b-2 border-yellow-400">
          Communication Table
        </span>
      </div> */}

      {/* OUTER WRAPPER - for 2D card effect */}
      <div className="container mt-3 mx-auto flex justify-center">
        <div className="bg-white border-4 border-black p-1 shadow-md "/>
          {/* Inner Yellow Card */}
          <div className="bg-yellow-400 p-10 md:p-14 rounded-sm flex flex-col md:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="md:w-2/3 text-black space-y-4">
              <h2 className="text-3xl md:text-4xl space-y-4 font-black">
               GET IN TOUCH
              </h2>

              <div className="text-lg font-normal space-y-3">
                <div>
                  <p><strong>Name of RA:</strong> Gaurav Shriram Kulkarni</p>
                  <p><strong>Entity Type:</strong> Individual</p>
                  <p><strong>Registration No.:</strong> INH000009311</p>
                  <p><strong>BSE Enlistment No.:</strong> 5534</p>
                  <p><strong>Trade Name:</strong> Gaurav Shriram Kulkarni</p>
                </div>
                <div>
                  <p><strong>Residential/ Registered Address:</strong><br />
                    Flat no 506, A wing, Kesar valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062
                  </p>
                  <p><strong>Contact No.:</strong> 9970664299</p>
                  <p><strong>Email:</strong> <a href="mailto:researchanalyst92@gmail.com" className="underline hover:text-blue-600">researchanalyst92@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
              <img src="/CTAIMG.png" alt="Metrics Report" className="w-full max-w-sm drop-shadow-md" />
            </div>
          </div>

      </div>
    </section>
  );
}
