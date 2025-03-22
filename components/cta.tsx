import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      {/* Navigation Tabs */}
      <div className="container flex gap-6 text-white text-lg font-semibold uppercase">
        <span className="text-yellow-400 border-b-2 border-yellow-400">Reporting</span>
      </div>
      
      {/* CTA Content */}
      <div className="container relative mt-8 mx-auto bg-yellow-400 p-8 md:p-12 rounded-lg shadow-xl flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-2/3 text-black">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            We Report on the Metrics <br className="hidden md:block" /> That <span className="text-black">Really Matter</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Not just leads and CPL—our job is to look all the way down the funnel—to SQL, Opportunity, and Customers—to figure out what’s working and what isn’t.
          </p>
          <p className="text-lg font-semibold">
            Our reporting is done automagically, so you’ll never be in the dark.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-end">
          <img src="/CTAIMG.png" alt="Metrics Report" className="w-full max-w-sm drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}
