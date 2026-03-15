import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import RankBadge from "@/components/RankBadge";
import { courses, instructors, testimonials, stats, ranks } from "@/data/mock-data";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Shield, Target, Award, BookOpen, Star, ChevronRight, Users, TrendingUp } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-3 py-1.5 text-xs font-medium text-primary-foreground/80 uppercase tracking-widest">
              <Shield className="h-3.5 w-3.5" />
              Defence Training Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Train for Defence Excellence
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
              The definitive platform for strategic preparation and tactical mastery. Develop your capabilities through structured military-grade curriculum.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/courses">
                <Button variant="hero" className="bg-primary-action text-primary-action-foreground hover:bg-primary-action/90 gap-2">
                  Browse Courses <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/admissions">
                <Button variant="hero-outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-surface">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-3xl font-heading font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-action mb-2">Course Catalog</p>
              <h2 className="text-3xl font-heading font-bold tracking-tight">Featured Courses</h2>
            </div>
            <Link to="/courses" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary-action hover:underline">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-action mb-2">Academy Advantage</p>
            <h2 className="text-3xl font-heading font-bold tracking-tight">Why Choose Bahria Force Academy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Military-Grade Curriculum", desc: "Courses designed by experienced defence professionals with real operational expertise." },
              { icon: Award, title: "Cadet Rank Progression", desc: "Earn ranks as you complete courses. Track your growth from Recruit to Officer Candidate." },
              { icon: BookOpen, title: "Structured Learning Paths", desc: "Sequential curriculum ensures comprehensive coverage of each discipline." },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-[12px] shadow-card p-8 space-y-4">
                <div className="h-10 w-10 rounded-md bg-primary-action/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary-action" />
                </div>
                <h3 className="font-heading font-semibold text-lg tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rank System */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Gamification</p>
              <h2 className="text-3xl font-heading font-bold tracking-tight">Cadet Rank System</h2>
              <p className="text-muted-foreground leading-relaxed">
                Progress through military ranks as you complete courses and achieve milestones. Your service record reflects your dedication and competence.
              </p>
              <div className="space-y-4 pt-4">
                {ranks.map((rank) => (
                  <div key={rank.title} className="flex items-center justify-between p-4 bg-surface rounded-[12px] shadow-card">
                    <RankBadge rank={rank.title} chevrons={rank.chevrons} />
                    <span className="text-xs text-muted-foreground font-mono">{rank.minPoints} pts required</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-[12px] p-10 text-primary-foreground space-y-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8" />
                <div>
                  <p className="font-heading font-bold text-2xl">Service Record</p>
                  <p className="text-sm text-primary-foreground/60">Track your progression</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Rank: Senior Cadet</span>
                    <span className="font-mono">340/600</span>
                  </div>
                  <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: "57%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-primary-foreground/5 rounded-md p-4 text-center">
                    <p className="font-heading font-bold text-xl">12</p>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">Courses</p>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-md p-4 text-center">
                    <p className="font-heading font-bold text-xl">94%</p>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">Avg Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-action mb-2">Expert Faculty</p>
            <h2 className="text-3xl font-heading font-bold tracking-tight">Instructor Profiles</h2>
          </div>
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-action mb-2">Student Success</p>
            <h2 className="text-3xl font-heading font-bold tracking-tight">What Our Cadets Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-surface rounded-[12px] shadow-card p-8 space-y-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="pt-2 border-t">
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-accent font-medium">{t.rank}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight">
            Begin Your Service Record
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto">
            Join thousands of aspiring officers preparing for defence excellence through structured, professional training.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link to="/courses">
              <Button variant="hero" className="bg-primary-action text-primary-action-foreground hover:bg-primary-action/90 gap-2">
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
