import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  { step: "01", title: "Submit Application", desc: "Complete the online enrollment form with your academic and personal details." },
  { step: "02", title: "Document Verification", desc: "Submit required documents for verification by the admissions office." },
  { step: "03", title: "Eligibility Review", desc: "Your application is reviewed against academy eligibility criteria." },
  { step: "04", title: "Enrollment Confirmation", desc: "Receive your enrollment confirmation and begin training." },
];

const requirements = [
  "Valid national identity document",
  "Academic transcripts and certificates",
  "Medical fitness certificate",
  "Two passport-sized photographs",
  "Character reference letter",
  "Completed application form",
];

export default function Admissions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight mb-2">
            Admissions
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl">
            Join the next intake of aspiring defence professionals. Review the enrollment process and requirements below.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold tracking-tight mb-10">Enrollment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-surface rounded-[12px] shadow-card p-6 space-y-3">
                <span className="text-3xl font-heading font-bold text-primary-action/20">{s.step}</span>
                <h3 className="font-heading font-semibold tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-heading font-bold tracking-tight mb-6">Required Documents</h2>
            <div className="space-y-3">
              {requirements.map((req) => (
                <div key={req} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold tracking-tight">Eligibility Criteria</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>• Minimum age: 18 years at the time of enrollment</li>
              <li>• Minimum education: Higher Secondary Certificate or equivalent</li>
              <li>• Physically fit as per academy medical standards</li>
              <li>• No criminal record or pending legal proceedings</li>
              <li>• Pakistani nationality (international applicants reviewed separately)</li>
            </ul>
            <Link to="/contact">
              <Button variant="action" className="gap-2 mt-4">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
