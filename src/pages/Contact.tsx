import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight mb-2">
            Contact Us
          </h1>
          <p className="text-primary-foreground/60">Reach out to the academy administration.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-heading font-bold tracking-tight mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Full Name</label>
                  <input className="w-full h-11 px-4 bg-surface border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-action" placeholder="Enter your name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full h-11 px-4 bg-surface border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-action" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Subject</label>
                <input className="w-full h-11 px-4 bg-surface border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-action" placeholder="Message subject" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full h-32 p-4 bg-surface border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-action" placeholder="Your message..." />
              </div>
              <Button variant="action" className="h-11 px-8">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold tracking-tight">Academy Information</h2>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "info@bahriaforceacademy.com" },
                { icon: Phone, label: "Phone", value: "+92 51 111 2222" },
                { icon: MapPin, label: "Location", value: "Bahria University Campus, Islamabad, Pakistan" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-primary-action/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary-action" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-muted rounded-[12px] h-64 flex items-center justify-center text-muted-foreground text-sm">
              Map placeholder — Islamabad, Pakistan
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
