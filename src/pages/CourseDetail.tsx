import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/mock-data";
import { Clock, Users, Star, BookOpen, ChevronDown, ChevronUp, CheckCircle2, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-heading font-bold">Course not found</h1>
          <Link to="/courses" className="text-primary-action hover:underline text-sm mt-4 inline-block">
            Back to courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleModule = (i: number) => {
    setExpandedModules((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const totalLessons = course.curriculum.reduce((a, m) => a + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest bg-primary-action/20 text-primary-action px-2.5 py-1 rounded-md">
                  {course.category}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest bg-primary-foreground/10 text-primary-foreground/70 px-2.5 py-1 rounded-md">
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight">
                {course.title}
              </h1>
              <p className="text-primary-foreground/60 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {totalLessons} lessons</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.students} students</span>
                <span className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-500 fill-amber-500" /> {course.rating}</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <img src={course.instructorImage} alt={course.instructor} className="h-10 w-10 rounded-md object-cover" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">{course.instructor}</p>
                  <p className="text-xs text-primary-foreground/50">Course Instructor</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-[12px] shadow-card-hover p-6 space-y-5 self-start">
              <img src={course.image} alt={course.title} className="w-full aspect-video object-cover rounded-md" />
              <div className="text-center">
                <p className="font-heading font-bold text-3xl">${course.price}</p>
                <p className="text-xs text-muted-foreground mt-1">One-time enrollment</p>
              </div>
              <Link to={`/course-player/${course.slug}`}>
                <Button variant="action" className="w-full h-12 text-base font-semibold">
                  Enroll Now
                </Button>
              </Link>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Full course access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Certificate of completion</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Downloadable resources</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Quiz assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-heading font-bold tracking-tight mb-8">Course Curriculum</h2>
          <div className="space-y-3">
            {course.curriculum.map((module, i) => (
              <div key={i} className="bg-surface rounded-[12px] shadow-card overflow-hidden">
                <button
                  onClick={() => toggleModule(i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-sm">{module.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{module.lessons.length} lessons</p>
                  </div>
                  {expandedModules.includes(i) ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
                {expandedModules.includes(i) && (
                  <div className="border-t">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 px-5 py-3 text-sm hover:bg-muted/20 transition-colors"
                      >
                        <PlayCircle className="h-4 w-4 text-primary-action shrink-0" />
                        <span className="flex-1">{lesson.title}</span>
                        <span className="text-xs text-muted-foreground font-mono">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
