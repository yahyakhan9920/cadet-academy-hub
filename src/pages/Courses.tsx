import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/mock-data";
import { Search } from "lucide-react";

const categories = ["All", "Strategy", "Fitness", "Leadership", "Intelligence"];
const levels = ["All Levels", "Intermediate", "Advanced", "Expert"];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || c.category === category;
    const matchLevel = level === "All Levels" || c.level === level;
    return matchSearch && matchCat && matchLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight mb-2">
            Course Catalog
          </h1>
          <p className="text-primary-foreground/60 mb-8">
            Browse our comprehensive defence training programs.
          </p>

          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-md bg-surface text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-action"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="flex gap-1 mr-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex gap-1">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    level === lvl
                      ? "bg-primary-action text-primary-action-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p>No courses found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
