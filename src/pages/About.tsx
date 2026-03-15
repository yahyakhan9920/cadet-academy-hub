import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { instructors, stats } from "@/data/mock-data";
import { Target, Shield, Award, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-action mb-3">About the Academy</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight mb-4">
            Developing Defence Excellence
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl leading-relaxed">
            Bahria Force Academy is the definitive platform for strategic preparation and tactical mastery, training the next generation of defence professionals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold tracking-tight">Academy Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide rigorous, structured training that develops the capabilities required for defence service. We combine academic excellence with practical skill development to produce leaders of exceptional calibre.
            </p>
            <div className="space-y-4">
              {[
                { icon: Target, text: "Excellence in strategic and tactical education" },
                { icon: Shield, text: "Character development and discipline" },
                { icon: Award, text: "Measurable competence through assessment" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-primary-action mt-0.5 shrink-0" />
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold tracking-tight">Training Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe that discipline is the foundation of excellence. Our curriculum is designed to challenge cadets intellectually, physically, and ethically, building the comprehensive competence required for modern defence operations.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface rounded-[12px] shadow-card p-5 text-center">
                  <p className="font-heading font-bold text-2xl">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold tracking-tight text-center mb-12">Instructor Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {instructors.map((inst) => (
              <div key={inst.id} className="bg-background rounded-[12px] shadow-card p-6 flex gap-5">
                <img src={inst.image} alt={inst.name} className="h-20 w-20 rounded-md object-cover shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold tracking-tight">{inst.name}</h3>
                  <p className="text-xs text-primary-action font-medium">{inst.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{inst.bio}</p>
                  <div className="flex gap-4 pt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {inst.courses} courses</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {inst.students} students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
