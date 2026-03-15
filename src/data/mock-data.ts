import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

export const courses = [
  {
    id: "1",
    title: "Defence Strategy & Tactical Planning",
    slug: "defence-strategy",
    instructor: "Col. Ahmad Khan",
    instructorImage: instructor1,
    image: course1,
    duration: "12 weeks",
    durationMins: 4320,
    level: "Advanced",
    difficulty: 4,
    category: "Strategy",
    students: 342,
    rating: 4.8,
    price: 299,
    description: "Master the fundamentals of modern defence strategy, including operational planning, threat assessment, and tactical decision-making frameworks used by military professionals worldwide.",
    lessons: 48,
    curriculum: [
      {
        title: "Module 1: Foundations of Defence Strategy",
        lessons: [
          { id: "l1", title: "Introduction to Strategic Thinking", duration: "45 min", completed: true },
          { id: "l2", title: "Historical Military Strategy Analysis", duration: "60 min", completed: true },
          { id: "l3", title: "Modern Threat Landscape", duration: "55 min", completed: false },
          { id: "l4", title: "Strategic Planning Frameworks", duration: "50 min", completed: false },
        ],
      },
      {
        title: "Module 2: Tactical Operations",
        lessons: [
          { id: "l5", title: "Operational Planning Principles", duration: "45 min", completed: false },
          { id: "l6", title: "Intelligence-Driven Decision Making", duration: "60 min", completed: false },
          { id: "l7", title: "Joint Operations Coordination", duration: "55 min", completed: false },
        ],
      },
      {
        title: "Module 3: Advanced Command",
        lessons: [
          { id: "l8", title: "Command Structure Design", duration: "50 min", completed: false },
          { id: "l9", title: "Crisis Management Protocols", duration: "45 min", completed: false },
          { id: "l10", title: "Final Strategic Assessment", duration: "90 min", completed: false },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Physical Fitness & Combat Readiness",
    slug: "physical-fitness",
    instructor: "Maj. Sarah Ahmed",
    instructorImage: instructor2,
    image: course2,
    duration: "8 weeks",
    durationMins: 2880,
    level: "Intermediate",
    difficulty: 3,
    category: "Fitness",
    students: 567,
    rating: 4.9,
    price: 199,
    description: "Comprehensive physical training program designed to build strength, endurance, and combat readiness required for military service.",
    lessons: 32,
    curriculum: [
      {
        title: "Module 1: Baseline Assessment",
        lessons: [
          { id: "l11", title: "Fitness Standards Overview", duration: "30 min", completed: false },
          { id: "l12", title: "Initial Physical Assessment", duration: "45 min", completed: false },
        ],
      },
      {
        title: "Module 2: Strength Training",
        lessons: [
          { id: "l13", title: "Upper Body Conditioning", duration: "60 min", completed: false },
          { id: "l14", title: "Lower Body Power Development", duration: "60 min", completed: false },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Leadership & Command Principles",
    slug: "leadership-command",
    instructor: "Brig. Tariq Mehmood",
    instructorImage: instructor1,
    image: course3,
    duration: "10 weeks",
    durationMins: 3600,
    level: "Advanced",
    difficulty: 5,
    category: "Leadership",
    students: 234,
    rating: 4.7,
    price: 349,
    description: "Develop command-level leadership skills through case studies, simulations, and frameworks proven in military operations.",
    lessons: 40,
    curriculum: [
      {
        title: "Module 1: Leadership Fundamentals",
        lessons: [
          { id: "l15", title: "Principles of Military Leadership", duration: "45 min", completed: false },
          { id: "l16", title: "Communication Under Pressure", duration: "50 min", completed: false },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Cyber Defence & Intelligence Operations",
    slug: "cyber-defence",
    instructor: "Lt. Col. Fatima Noor",
    instructorImage: instructor2,
    image: course4,
    duration: "14 weeks",
    durationMins: 5040,
    level: "Expert",
    difficulty: 5,
    category: "Intelligence",
    students: 189,
    rating: 4.6,
    price: 399,
    description: "Advanced training in cyber security, digital intelligence gathering, and information warfare for modern defence operations.",
    lessons: 56,
    curriculum: [
      {
        title: "Module 1: Cyber Threat Fundamentals",
        lessons: [
          { id: "l17", title: "Digital Threat Landscape", duration: "45 min", completed: false },
          { id: "l18", title: "Network Security Principles", duration: "60 min", completed: false },
        ],
      },
    ],
  },
];

export const instructors = [
  {
    id: "1",
    name: "Col. Ahmad Khan",
    title: "Defence Strategy Expert",
    image: instructor1,
    bio: "20+ years of experience in military strategy and operational planning. Former director of strategic studies.",
    courses: 5,
    students: 1200,
  },
  {
    id: "2",
    name: "Maj. Sarah Ahmed",
    title: "Physical Training Specialist",
    image: instructor2,
    bio: "Certified military fitness instructor with expertise in combat readiness programs and physical assessment.",
    courses: 3,
    students: 890,
  },
];

export const testimonials = [
  {
    name: "Cadet Ali Raza",
    rank: "Senior Cadet",
    text: "The structured approach to defence studies gave me the edge I needed. The curriculum is rigorous and the instructors are exceptional.",
    rating: 5,
  },
  {
    name: "Cadet Ayesha Malik",
    rank: "Officer Candidate",
    text: "This platform transformed my preparation. The course materials are comprehensive and the quiz system keeps you sharp.",
    rating: 5,
  },
  {
    name: "Cadet Hassan Shah",
    rank: "Senior Cadet",
    text: "The Cadet Rank System motivated me to push through every module. Professional-grade training at your fingertips.",
    rating: 5,
  },
];

export const stats = [
  { label: "Active Cadets", value: "2,400+" },
  { label: "Courses", value: "48" },
  { label: "Instructors", value: "18" },
  { label: "Success Rate", value: "94%" },
];

export const ranks = [
  { title: "Recruit", minPoints: 0, chevrons: 1 },
  { title: "Cadet", minPoints: 100, chevrons: 2 },
  { title: "Senior Cadet", minPoints: 300, chevrons: 3 },
  { title: "Officer Candidate", minPoints: 600, chevrons: 4 },
];
