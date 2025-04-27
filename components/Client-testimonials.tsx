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
    <section className="py-16 bg-[#faf9f5]">
      <div className="container mx-auto">
        <div className="flex items-start mb-8">
          <div className="relative">
            <div className="absolute -left-12 top-4 border-t border-l border-[#5d7a5d] h-12 w-12"></div>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Leaf icon"
                width={24}
                height={24}
                className="text-[#5d7a5d]"
              />
              <h2 className="text-2xl font-medium text-[#5d7a5d]">What our Clients</h2>
            </div>
            <p className="ml-9 text-2xl font-medium text-gray-700">say about us</p>
          </div>
          <div className="ml-auto">
            <p className="text-right text-gray-700">Postcards of Appreciation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-300 bg-white p-6 rounded-sm">
              <div className="flex justify-center mb-4">
                <div className="border border-gray-300 p-1 inline-block">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Postcard icon"
                    width={60}
                    height={60}
                    className="opacity-70"
                  />
                </div>
              </div>
              <p className="text-sm italic text-gray-700 mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="bg-[#f8f3e4] rounded-full p-1">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
