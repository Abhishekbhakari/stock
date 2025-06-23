import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      {/* Navigation Tabs */}
      <div className="container flex gap-6 text-white text-lg font-semibold uppercase">
        <span className="text-yellow-400 border-b-2 border-yellow-400">Communication Table</span>
      </div>
      
      {/* CTA Content */}
      <div className="container relative mt-8 mx-auto bg-yellow-400 p-8 md:p-12 rounded-lg shadow-xl flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-2/3 text-black">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h2>
         
           <div className=" text-lg">           <div>
             <p><strong>Name of RA:</strong> Gaurav Shriram Kulkarni</p>
             <p><strong>Entity Type:</strong> Individual</p>
             <p><strong>Registration No.:</strong> INH000009311</p>
             <p><strong>BSE Enlistment No.:</strong> 5534</p>
             <p><strong>Trade Name:</strong> Gaurav Shriram Kulkarni</p>
           </div>
           <div>
             <p><strong>Residential/ Registered Address:</strong><br />
             Flat no 506, A wing, Kesar valley, Patil Nagar, Chikhali, Pune, Maharashtra, 411062             </p>
      <p><strong>Contact No.:</strong> 9970664299</p>
             <p><strong>Email No.:</strong> <a href="mailto:researchanalyst92@gmail.com" className="">researchanalyst92@gmail.com</a></p>
           </div>
        </div>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-end">
          <img src="/CTAIMG.png" alt="Metrics Report" className="w-full max-w-sm drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}
