import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white backdrop-blur">
        <h1 className="text-7xl font-black font-sans text-black text-center capitalize mb-8">INTRESTED IN <br /> WORKING WITH US ?</h1>
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

