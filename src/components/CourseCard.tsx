import { Link } from "react-router-dom";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  price: number;
  slug: string;
}

export default function CourseCard({ title, instructor, image, duration, level, students, rating, price, slug }: CourseCardProps) {
  return (
    <Link
      to={`/courses/${slug}`}
      className="group block bg-surface rounded-[12px] shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 overflow-hidden"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-primary/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md">
            {level}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-heading font-semibold text-base tracking-tight leading-snug line-clamp-2 group-hover:text-primary-action transition-colors">
          {title}
        </h3>

        <p className="text-xs text-muted-foreground font-medium">{instructor}</p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {students}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-rating fill-rating" />
            {rating}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <span className="font-heading font-bold text-lg">${price}</span>
          <Button variant="action" size="sm" className="gap-1">
            Enroll <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
