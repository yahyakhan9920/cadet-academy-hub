import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RankBadge from "@/components/RankBadge";
import { courses } from "@/data/mock-data";
import {
  LayoutDashboard, BookOpen, FileQuestion, FileText, Award, User, LogOut, Shield,
  Clock, TrendingUp, Bell, ChevronRight, PlayCircle
} from "lucide-react";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
  { icon: FileQuestion, label: "Quizzes", href: "/dashboard/quizzes" },
  { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
  { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
];

export default function Dashboard() {
  const location = useLocation();
  const enrolledCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-surface border-r shrink-0 sticky top-0 h-screen">
        <div className="p-5 border-b">
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-sm tracking-tight">
            <Shield className="h-5 w-5 text-primary-action" />
            Bahria Force Academy
          </Link>
        </div>

        <div className="p-5 border-b">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
              AR
            </div>
            <div>
              <p className="font-heading font-semibold text-sm">Ali Raza</p>
              <p className="text-xs text-muted-foreground">ali.raza@email.com</p>
            </div>
          </div>
          <RankBadge rank="Senior Cadet" chevrons={3} size="sm" />
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Next: Officer Candidate</span>
              <span className="font-mono">340/600</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-all" style={{ width: "57%" }} />
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "bg-primary-action/10 text-primary-action"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <header className="h-16 bg-surface border-b flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <Link to="/" className="lg:hidden flex items-center gap-2 font-heading font-bold text-sm">
              <Shield className="h-5 w-5 text-primary-action" />
              BFA
            </Link>
            <h1 className="hidden lg:block font-heading font-semibold text-lg">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md hover:bg-muted transition-colors">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-accent rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-6 space-y-8 animate-fade-in">
          {/* Welcome */}
          <div className="bg-primary rounded-[12px] p-8 text-primary-foreground">
            <h2 className="font-heading font-bold text-2xl mb-2">Welcome back, Cadet Ali</h2>
            <p className="text-primary-foreground/60 text-sm">Continue your training to achieve Officer Candidate rank.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "Courses Enrolled", value: "3", icon: BookOpen },
                { label: "Completed", value: "1", icon: Award },
                { label: "Quiz Score Avg", value: "87%", icon: TrendingUp },
                { label: "Learning Streak", value: "12 days", icon: Clock },
              ].map((w) => (
                <div key={w.label} className="bg-primary-foreground/5 rounded-md p-4">
                  <w.icon className="h-4 w-4 text-primary-foreground/40 mb-2" />
                  <p className="font-heading font-bold text-xl">{w.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary-foreground/50">{w.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Progress */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-semibold text-lg">Course Progress</h3>
              <Link to="/dashboard/courses" className="text-xs text-primary-action hover:underline flex items-center gap-1">
                View All <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {enrolledCourses.map((course, i) => {
                const progress = [65, 30, 10][i];
                return (
                  <div key={course.id} className="bg-surface rounded-[12px] shadow-card p-5 space-y-4">
                    <div className="flex gap-3">
                      <img src={course.image} alt={course.title} className="h-14 w-20 object-cover rounded-md shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-heading font-semibold text-sm tracking-tight line-clamp-2">{course.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{course.instructor}</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-mono font-medium">{progress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary-action rounded-full transition-all" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <Link to={`/course-player/${course.slug}`}>
                      <Button variant="ghost" size="sm" className="w-full gap-1 text-primary-action">
                        <PlayCircle className="h-4 w-4" /> Continue Learning
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-[12px] shadow-card p-6">
              <h3 className="font-heading font-semibold mb-4">Upcoming Quizzes</h3>
              <div className="space-y-3">
                {[
                  { title: "Strategic Thinking Assessment", course: "Defence Strategy", due: "Mar 18" },
                  { title: "Fitness Standards Evaluation", course: "Physical Fitness", due: "Mar 22" },
                ].map((q) => (
                  <div key={q.title} className="flex items-center justify-between p-3 rounded-md bg-background">
                    <div>
                      <p className="text-sm font-medium">{q.title}</p>
                      <p className="text-xs text-muted-foreground">{q.course}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{q.due}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-[12px] shadow-card p-6">
              <h3 className="font-heading font-semibold mb-4">Announcements</h3>
              <div className="space-y-3">
                {[
                  { title: "New Course: Cyber Defence Operations", date: "Mar 15", type: "New" },
                  { title: "Physical Assessment Schedule Updated", date: "Mar 12", type: "Update" },
                ].map((a) => (
                  <div key={a.title} className="flex items-start gap-3 p-3 rounded-md bg-background">
                    <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-md shrink-0 mt-0.5 ${
                      a.type === "New" ? "bg-accent/10 text-accent" : "bg-primary-action/10 text-primary-action"
                    }`}>
                      {a.type}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
