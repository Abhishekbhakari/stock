"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  // const [isLoading, setIsLoading] = useState(false)
  // const { toast } = useToast()

  // async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   setIsLoading(true)

  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     body: formData,
  //   })

  //   setIsLoading(false)

  //   if (response.ok) {
  //     toast({
  //       title: "Message sent",
  //       description: "We'll get back to you as soon as possible.",
  //     })
  //     event.currentTarget.reset()
  //   } else {
  //     toast({
  //       title: "Error",
  //       description: "There was a problem sending your message. Please try again.",
  //       variant: "destructive",
  //     })
  //   }
  // }

  return (

    <div>
        <section className="relative bg-white py-16 md:py-24">
      {/* Navigation Tabs */}
      

      {/* OUTER WRAPPER - for 2D card effect */}
      <div className="container mt-4 mx-auto flex justify-center">
        <div className="bg-black border-4 border-white p-1 shadow-md "/>
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
    </div>
    // <form onSubmit={onSubmit} className="space-y-6 backdrop-blur-sm">
    //   <div className="space-y-2">
    //     <label
    //       htmlFor="name"
    //       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //     >
    //       Name
    //     </label>
    //     <Input id="name" name="name" placeholder="Your name" required />
    //   </div>
    //   <div className="space-y-2">
    //     <label
    //       htmlFor="email"
    //       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //     >
    //       Email
    //     </label>
    //     <Input id="email" name="email" type="email" placeholder="Your email" required />
    //   </div>
    //   <div className="space-y-2">
    //     <label
    //       htmlFor="message"
    //       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //     >
    //       Message
    //     </label>
    //     <Textarea id="message" name="message" placeholder="Your message" required />
    //   </div>
    //   <Button type="submit" className="w-full" disabled={isLoading}>
    //     {isLoading ? "Sending..." : "Send Message"}
    //   </Button>
    // </form>
  )
}

