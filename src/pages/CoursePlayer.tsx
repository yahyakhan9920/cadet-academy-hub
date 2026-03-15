import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import {
  PlayCircle, CheckCircle2, ChevronLeft, ChevronDown, ChevronUp,
  FileText, MessageSquare, HelpCircle, BookOpen, Shield
} from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "notes", label: "Notes", icon: FileText },
  { id: "files", label: "Files", icon: BookOpen },
  { id: "quiz", label: "Quiz", icon: HelpCircle },
  { id: "discussion", label: "Discussion", icon: MessageSquare },
];

export default function CoursePlayer() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [activeTab, setActiveTab] = useState("notes");
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [activeLesson, setActiveLesson] = useState("l1");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-heading font-bold">Course not found</h1>
          <Link to="/courses" className="text-primary-action text-sm hover:underline mt-2 inline-block">Back to courses</Link>
        </div>
      </div>
    );
  }

  const toggleModule = (i: number) => {
    setExpandedModules((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const currentLesson = course.curriculum
    .flatMap((m) => m.lessons)
    .find((l) => l.id === activeLesson);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="h-14 bg-primary flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <Link to={`/courses/${slug}`} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <Shield className="h-4 w-4 text-primary-action" />
          <span className="text-sm font-heading font-semibold text-primary-foreground truncate max-w-xs">
            {course.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-primary-foreground/50 font-mono hidden sm:block">2/10 completed</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BookOpen className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Curriculum sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-surface border-r overflow-y-auto shrink-0 hidden md:block">
            <div className="p-4 border-b">
              <h3 className="font-heading font-semibold text-sm">Course Curriculum</h3>
            </div>
            <div className="divide-y">
              {course.curriculum.map((module, i) => (
                <div key={i}>
                  <button
                    onClick={() => toggleModule(i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{module.title}</h4>
                      <p className="text-[10px] text-muted-foreground/60 mt-0.5">{module.lessons.length} lessons</p>
                    </div>
                    {expandedModules.includes(i) ? (
                      <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedModules.includes(i) && (
                    <div className="pb-2">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson.id)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                            activeLesson === lesson.id
                              ? "bg-primary-action/5 text-primary-action border-l-2 border-primary-action"
                              : "text-foreground/80 hover:bg-muted/30"
                          }`}
                        >
                          {lesson.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          ) : (
                            <PlayCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                          )}
                          <span className="flex-1 text-sm truncate">{lesson.title}</span>
                          <span className="text-[10px] font-mono text-muted-foreground">{lesson.duration}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Video area */}
          <div className="bg-foreground aspect-video flex items-center justify-center relative">
            <div className="text-center space-y-3">
              <PlayCircle className="h-16 w-16 text-primary-foreground/40 mx-auto" />
              <p className="text-primary-foreground/60 text-sm font-heading">
                {currentLesson?.title || "Select a lesson"}
              </p>
              <p className="text-primary-foreground/30 text-xs">
                Video player — {currentLesson?.duration || ""}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b bg-surface">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-primary-action text-primary-action"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="p-6 flex-1">
            {activeTab === "notes" && (
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-heading font-semibold">Lesson Notes</h3>
                <textarea
                  placeholder="Take notes for this lesson..."
                  className="w-full h-40 p-4 bg-surface border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-action"
                />
                <Button variant="action" size="sm">Save Notes</Button>
              </div>
            )}
            {activeTab === "files" && (
              <div className="space-y-3 max-w-2xl">
                <h3 className="font-heading font-semibold">Downloadable Materials</h3>
                {["Lecture Slides.pdf", "Reference Guide.pdf", "Exercise Sheet.docx"].map((file) => (
                  <div key={file} className="flex items-center justify-between p-3 bg-surface rounded-md shadow-subtle">
                    <span className="text-sm flex items-center gap-2"><FileText className="h-4 w-4 text-primary-action" /> {file}</span>
                    <Button variant="ghost" size="sm">Download</Button>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "quiz" && (
              <div className="max-w-2xl space-y-6">
                <h3 className="font-heading font-semibold">Lesson Quiz</h3>
                <div className="bg-surface rounded-[12px] shadow-card p-6 space-y-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Question 1 of 5</p>
                    <p className="font-heading font-semibold">What is the primary objective of strategic planning in defence operations?</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      "To allocate resources efficiently",
                      "To establish clear operational objectives",
                      "To minimize risk and maximize effectiveness",
                      "All of the above",
                    ].map((opt, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-md border cursor-pointer hover:bg-muted/30 transition-colors"
                      >
                        <input type="radio" name="q1" className="accent-primary-action" />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                  <Button variant="action">Submit Answer</Button>
                </div>
              </div>
            )}
            {activeTab === "discussion" && (
              <div className="max-w-2xl space-y-4">
                <h3 className="font-heading font-semibold">Discussion</h3>
                <p className="text-sm text-muted-foreground">No discussions yet. Start the conversation.</p>
                <textarea
                  placeholder="Share your thoughts or ask a question..."
                  className="w-full h-24 p-4 bg-surface border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-action"
                />
                <Button variant="action" size="sm">Post</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
