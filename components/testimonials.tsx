import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    content:
      "Amane Soft's AI-driven analytics platform has revolutionized our decision-making process. The insights we've gained have been invaluable.",
    image: "/placeholder.svg?height=100&width=100",
    color: "gold",
  },
  {
    name: "Michael Chen",
    role: "Head of IT, Global Retail Ltd.",
    content:
      "The cloud migration solution provided by Amane Soft was seamless. Their expertise in handling complex systems is truly impressive.",
    image: "/placeholder.svg?height=100&width=100",
    color: "peach",
  },
  {
    name: "Emily Rodriguez",
    role: "CISO, SecureBank",
    content:
      "Amane Soft's cybersecurity enhancements have significantly strengthened our defenses. Their proactive approach gives us peace of mind.",
    image: "/placeholder.svg?height=100&width=100",
    color: "gold",
  },
]

export default function Testimonials() {
  return (
    <section className="relative px-4 py-16 md:py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#1E003A_30%,#090A31_100%)]" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
          What Our <span className="text-yellow-400">Clients Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Stacked card effect */}
              <div
                className={`absolute inset-0 ${
                  testimonial.color === "gold" ? "bg-[#FFC84A]" : "bg-[#FFB680]"
                } transform translate-x-2 translate-y-2`}
              />

              {/* Main card */}
              <div
                className={`relative border p-6 md:p-8 min-h-[280px] flex flex-col justify-between ${
                  testimonial.color === "gold" ? "bg-[#fcfcfc] text-black" : "bg-[#f9f9f8] text-black"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-md font-medium italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
