import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading font-bold text-lg">
              <Shield className="h-6 w-6" />
              <span>Bahria Force Academy</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              The definitive platform for strategic preparation and tactical mastery in defence studies.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/50">Academy</h4>
            <ul className="space-y-2">
              {["About", "Courses", "Admissions", "Blog"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/50">Resources</h4>
            <ul className="space-y-2">
              {["Student Dashboard", "Course Catalog", "Leaderboard", "Certificates"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-4 text-primary-foreground/50">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                info@bahriaforceacademy.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                +92 51 111 2222
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Bahria University, Islamabad
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Bahria Force Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
