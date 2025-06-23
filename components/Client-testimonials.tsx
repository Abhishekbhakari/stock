import Image from "next/image"

const testimonials = [
  {
    quote:
      "Adroit helped me to understand the model of investment/EVM philosophy and the research behind Equity Value platform. I liked the detailed approach of incorporating fundamental analysis with the EVM model, focus on looking profits sensibly. One of the discussion helped to address all queries I had. I am very happy with the emerging market income. Happy to continue taking Equity Value recommendations.",
    name: "Karthik Ganapati",
    position: "Technology Consultant and Business Growth Advisor",
  },
  {
    quote:
      "I don't have the skill set and capability to look for investments on my own. I have always used to invest in high cost assets in the past for investment returns. That's where Equity Value come, the process is seamless and you get adequate control on the amount and you don't have to pay fees. It was a refreshing personal touch of Adroit to what I was about this engagement.",
    name: "Camille Montoya",
    position: "Co-Founder, Tech Services",
  },
  {
    quote:
      "Adroit's investment strategy is very unique. The model, which is based on hard mathematics and a thorough understanding of market dynamics, provides a level of confidence and predictability that I have not seen before. I would suggest them to anyone looking for a professional and results-driven investment approach.",
    name: "Dr. Clement Diaz",
    position: "Data Analyst",
  },
]

export default function ClientTestimonials() {
  return (
    <section className="relative bg-[#fbf9f3] py-20 px-4">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5d7a5d] to-[#a0b289]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="Leaf"
              width={30}
              height={30}
            />
            <h2 className="text-3xl font-bold text-[#5d7a5d] tracking-tight">What Our Clients Say</h2>
          </div>
          <p className="text-gray-700">Voices of trust and transformation</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-lg shadow-md p-6 transition duration-300 hover:scale-[1.02]"
            >
              {/* Decorative Quote */}
              <div className="text-6xl text-[#5d7a5d] absolute -top-6 left-4 opacity-10 font-serif">“</div>

              {/* Quote Text */}
              <p className="text-gray-700 text-sm leading-relaxed italic mb-6 mt-4 relative z-10">
                {testimonial.quote}
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-[#f8f3e4] bg-[#f8f3e4] p-1"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
