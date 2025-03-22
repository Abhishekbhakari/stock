import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-background/95 backdrop-blur">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-8 text-muted-foreground">
            Have questions or need assistance? We're here to help. Fill out the form below, and we'll get back to you as
            soon as possible.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

