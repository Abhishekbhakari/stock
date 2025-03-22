import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    content:
      "Amane Soft's AI-driven analytics platform has revolutionized our decision-making process. The insights we've gained have been invaluable.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Head of IT, Global Retail Ltd.",
    content:
      "The cloud migration solution provided by Amane Soft was seamless. Their expertise in handling complex systems is truly impressive.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "CISO, SecureBank",
    content:
      "Amane Soft's cybersecurity enhancements have significantly strengthened our defenses. Their proactive approach gives us peace of mind.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="container py-24 md:py-32">
      <h2 className="mb-12 text-center font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

