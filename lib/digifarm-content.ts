import type { LucideIcon } from "lucide-react";
import {
  Target,
  CheckCircle2,
  Layout,
  TrendingUp,
  UserPlus,
  UserCheck,
  RefreshCw,
  Truck,
  Smartphone,
  Users2,
  GitBranch,
  EyeOff,
  ThumbsDown,
  LineChart,
  Clipboard,
  Link2,
  Volume2,
  Map,
  Eye,
  Repeat,
} from "lucide-react";
import { Radar, Boxes, Waypoints, MonitorSmartphone, Smartphone as PhoneTabIcon, Layers3 } from "lucide-react";
import { Target as TargetIcon, GitFork, Smartphone as PhoneIcon, BarChart3 } from "lucide-react";
import { UserCircle, Compass as CompassIcon, Coffee, PenTool, Check, RotateCw, Send } from "lucide-react";
import {
  Users as UsersIcon2,
  Layers as LayersIcon2,
  RefreshCcw,
  Monitor,
  Navigation,
  TrendingDown,
  ThumbsUp,
  Eye as EyeIcon2,
  UserCheck as UserCheckIcon,
  UserCog,
} from "lucide-react";
import { RefreshCw as RefreshIcon, TrendingUp as TrendUpIcon, Heart } from "lucide-react";

export type IconPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type StatItem = {
  value: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
};

// ---- Overview ----
export const OVERVIEW_POINTS: IconPoint[] = [
  {
    title: "The Opportunity",
    description: "Modernize agricultural operations through one connected digital ecosystem.",
    icon: Target,
  },
  {
    title: "Business Goal",
    description: "Simplify produce collection, payments, financing, and reporting for every stakeholder.",
    icon: CheckCircle2,
  },
  {
    title: "Project Scope",
    description: "4 Products • 3 Platforms • 5 User Groups\nFarmer App • Collection App • Buyer/Admin Portals",
    icon: Layout,
  },
  {
    title: "Outcome",
    description: "Delivered a scalable design system powering a consistent multi-product experience.",
    icon: TrendingUp,
  },
];

export const OVERVIEW_STATS: StatItem[] = [
  { value: "12K+", label: "Farmers", sublabel: "Across Kenya", icon: UserPlus },
  { value: "320+", label: "Agents", sublabel: "Daily Collection", icon: UserCheck },
  { value: "2.4M", label: "Transactions", sublabel: "Processed digitally", icon: RefreshCw },
  { value: "250+", label: "Cooperatives", sublabel: "Connected", icon: Truck },
  { value: "4", label: "Digital Products", sublabel: "Delivered", icon: Smartphone },
  { value: "5", label: "User Groups", sublabel: "Supported", icon: Users2 },
];

// ---- Challenge ----
export const CHALLENGE_INTRO = {
  title: "Understanding The Challenge",
  description:
    "Digifarm served multiple stakeholders across the agricultural value chain, but many critical workflows remained manual, fragmented, and difficult to scale. The challenge was to create a unified digital experience that simplified operations without increasing complexity.",
};

export const CHALLENGE_LIST: IconPoint[] = [
  {
    title: "Fragmented Workflows",
    description: "Collection, payments, and reporting relied on disconnected processes across different user groups.",
    icon: GitBranch,
  },
  {
    title: "Limited Visibility",
    description: "Stakeholders lacked real-time operational insights, making monitoring and decision-making inefficient.",
    icon: EyeOff,
  },
  {
    title: "Low Tech Literacy",
    description: "The platform needed to remain intuitive for users with varying levels of digital literacy.",
    icon: ThumbsDown,
  },
  {
    title: "Scaling Complexity",
    description: "Supporting multiple products and user types required a consistent, scalable design approach.",
    icon: LineChart,
  },
];

export const CHALLENGE_CARDS: IconPoint[] = [
  {
    title: "Manual Collection",
    description: "Paper-based collection created delays and errors.",
    icon: Clipboard,
  },
  {
    title: "Disconnected Systems",
    description: "Information was scattered across multiple tools, creating fragmented user experiences.",
    icon: Link2,
  },
  {
    title: "Limited Visibility",
    description: "Operational and financial data lacked real-time visibility for key managing stakeholders.",
    icon: EyeOff,
  },
  {
    title: "Diverse Users",
    description: "One ecosystem had to serve farmers, agents, buyers, cooperatives, and administrators.",
    icon: Users2,
  },
  
];
export const RESEARCH_INTRO = {
  title: "Understanding Real People. Solving Real Problems.",
  paragraphs: [
    "We immersed ourselves in the agricultural value chain by visiting farms, collection centres, and cooperatives across Kenya.",
    "Through observation, interviews, and workflow mapping, we uncovered the operational challenges shaping the Digifarm ecosystem.",
  ],
};

export const RESEARCH_STATS = [
  {
    value: "32",
    label: "Stakeholder Interviews",
    sublabel: "Farmers, collection agents, buyers, and cooperative managers.",
    icon: Volume2,
  },
  {
    value: "6",
    label: "Counties Visited",
    sublabel: "Nandi, Uasin Gishu, Embu, Bungoma, Kericho, and Mt. Elgon.",
    icon: Map,
  },
  {
    value: "120+",
    label: "Research Observations",
    sublabel: "Workflows, usability issues, and operational insights documented.",
    icon: Eye,
  },
  {
    value: "3",
    label: "Weeks of Field Research",
    sublabel: "On-site visits, interviews, and observations.",
    icon: Repeat,
  },
];

export const RESEARCH_PHOTOS = [
  { src: "/research/field-observation.png", caption: "Field Observation" },
  { src: "/research/community-conversations.png", caption: "Community Conversations" },
  { src: "/research/daily-workflows.png", caption: "Understanding Daily Workflows" },
  { src: "/research/collection-center.png", caption: "Collection Center Visits" },
  { src: "/research/across-counties.png", caption: "Across Counties" },
];

export const RESEARCH_METHODS = [
  {
    number: "01",
    title: "Field Visits",
    description: "Observed day-to-day farming and produce collection",
  },
  {
    number: "02",
    title: "Stakeholder Interviewed",
    description: "Conducted one-on-one stakeholders, and group discussions.",
  },
  {
    number: "03",
    title: "Workflow Analysis",
    description: "Mapped end-to-end collection, payment, grading, and reporting",
  },
  {
    number: "04",
    title: "Desk Research",
    description: "Reviewed existing platforms, reports, and business.",
  },
];

export const RESEARCH_INTERVIEWEES = [
  {
    name: "Farmers",
    description: "Cultivated and supplied produce to the ecosystem.",
    image: "/research/farmers.png",
  },
  {
    name: "Collection Agents",
    description: "Collected, graded, weighed, and recorded produce.",
    image: "/research/collection-agents.png",
  },
  {
    name: "Buyers",
    description: "Monitored produce quality, procurement, and tracked inventory.",
    image: "/research/buyers.png",
  },
  {
    name: "Admins",
    description: "Managed users, permissions, and operations.",
    image: "/research/admins.png",
  },
];

export const RESEARCH_INSIGHTS = [
  { title: "Manual Processes", description: "Paper-based records slowed operations." },
  { title: "Connectivity", description: "Unreliable internet access affected data." },
  { title: "Digital Literacy", description: "Many users required simple, intuitive interfaces." },
  { title: "Visibility", description: "Stakeholders lacked real-time insights." },
];

export const RESEARCH_TAKEAWAY =
  "The solution was to design one connected ecosystem that was simple, scalable, and accessible for every stakeholder.";

export const SOLUTION_TABS = [
  { label: "Strategy", icon: Radar },
  { label: "Architecture", icon: Boxes },
  { label: "User Flow", icon: Waypoints },
  { label: "Wireframes", icon: MonitorSmartphone },
  { label: "Final UI", icon: PhoneTabIcon },
  { label: "Design System", icon: Layers3 },
];

export const SOLUTION_INTRO =
  "Every design decision was guided by real user insights gathered during field research. Our goal was to simplify complex agricultural operations.";

export const DESIGN_STRATEGY_INTRO =
  "Every design decision was guided by real user insights gathered during field research.";

export const DESIGN_PRINCIPLES = [
  {
    number: "01",
    title: "Simplicity First",
    description: "Make complex workflows feel simple.",
    icon: TargetIcon,
  },
  {
    number: "02",
    title: "One Ecosystem",
    description: "Connect every workflow in one platform.",
    icon: GitFork,
  },
  {
    number: "03",
    title: "Mobile First",
    description: "Design for users on the move.",
    icon: PhoneIcon,
  },
  {
    number: "04",
    title: "Data Transparency",
    description: "Turn data into clear insights.",
    icon: BarChart3,
  },
];

export const DESIGN_APPROACH_INTRO = {
  title: "Our Design Approach",
  description:
    "Every stage of the design process was informed by field research and continuous stakeholder feedback.",
};

export const DESIGN_APPROACH_STEPS = [
  { title: "Empathise", description: "Understand users, workflows, and challenges.", icon: UserCircle },
  { title: "Define", description: "Translate research into actionable problems.", icon: CompassIcon },
  { title: "Ideate", description: "Explore and evaluate several solution concepts.", icon: Coffee },
  { title: "Prototype", description: "Validate ideas and solutions with interactive designs.", icon: PenTool },
  { title: "Test", description: "Gather feedback through usability sessions.", icon: Check },
  { title: "Iterate", description: "Refine and improve the experience in cycles.", icon: RotateCw },
  { title: "Deliver", description: "Launch a scalable, production-ready solution.", icon: Send },
];

export const DESIGN_GOALS_INTRO = {
  title: "Design Goals",
  description:
    "The design focused on simplifying complex agricultural workflows while improving efficiency, transparency, and scalability.",
};

export const DESIGN_GOALS = [
  "Reduce manual processes and paperwork.",
  "Support users in low-connectivity environments.",
  "Enable faster, secure digital transactions.",
  "Create intuitive experiences for all user groups.",
  "Build a scalable foundation for future growth.",
];

export const STRATEGY_TAKEAWAY = {
  label: "A STRATEGY ROOTED IN REAL PEOPLE & REAL CHALLENGES!",
  quote:
    "Great design isn't about digitising existing processes—it's about reimagining them to create simpler and connected experiences.",
};

export const IMPACT_INTRO =
  "The redesigned Digifarm Collection platform streamlined field operations by simplifying collection, payment, and farmer management workflows.";

export const IMPACT_OUTCOME_STATS = [
  {
    value: "15+",
    label: "Usability Insights",
    description: "Design decisions were validated through insights gathered via field research.",
    icon: UsersIcon2,
  },
  {
    value: "32",
    label: "Hi-Fi Screens",
    description: "Production ready responsive high-fidelity screens across mobile and web.",
    icon: LayersIcon2,
  },
  {
    value: "3",
    label: "Major Iterations",
    description: "Iterations refined through continuous user testing and stakeholder feedback.",
    icon: RefreshCcw,
  },
  {
    value: "2",
    label: "Platforms",
    description: "A unified design solution delivered for web portal and mobile app.",
    icon: Monitor,
  },
];

export const UX_IMPROVEMENTS = [
  {
    title: "Faster Workflows",
    description: "Reduced steps to complete collections and payments more efficiently.",
    icon: Navigation,
  },
  {
    title: "Reduced Cognitive Load",
    description: "Simplified complex tasks into clear, guided experiences.",
    icon: TrendingDown,
  },
  {
    title: "Better Consistency",
    description: "Unified components and interactions across web and mobile.",
    icon: ThumbsUp,
  },
  {
    title: "Improved Visibility",
    description: "Clear dashboards provided better access to operational insights.",
    icon: EyeIcon2,
  },
];

export const BEFORE_AFTER = [
  { before: "Multiple disconnected collection workflows", after: "Unified end-to-end collection journey" },
  { before: "Long, overwhelming forms", after: "Guided multi-step experiences" },
  { before: "Inconsistent interface patterns", after: "Standardized reusable components" },
  { before: "Limited visibility into operations", after: "Centralized dashboards and reporting" },
  { before: "Minimal feedback during actions", after: "Clear loading, success, and error states" },
  { before: "Fragmented mobile and web experiences", after: "Consistent cross-platform experience" },
];

export const VALIDATION_ITEMS = [
  {
    title: "User Validation",
    description: "Validated through usability sessions with field users.",
    icon: UsersIcon2,
  },
  {
    title: "Stakeholder Alignment",
    description: "Refined collaboratively with business stakeholders.",
    icon: UserCheckIcon,
  },
  {
    title: "Iterative Refinement",
    description: "Improved through continuous feedback fixes.",
    icon: RefreshCcw,
  },
];

export const IMPACT_TAKEAWAY = {
  label: "KEY TAKEAWAY",
  quote:
    "Designing for field operations means reducing complexity, not adding features. Research, iteration, and a scalable design system helped create a faster, more intuitive experience across mobile and web.",
};
export const REFLECTION_QUOTE =
  "Great enterprise experiences aren't built by adding more features—they're built by removing friction.";

export const REFLECTION_TAKEAWAY = {
  label: "KEY TAKEAWAY",
  description:
    "This project reinforced that great enterprise UX starts with understanding real user workflows. Research, iteration, and a scalable design system transformed a complex workflow into a simpler, faster, and more consistent experience.",
};

export const REFLECTION_PRINCIPLES = [
  {
    title: "Research First",
    description: "Field research and user testing ensured every design decision addressed real user needs.",
    icon: Users2,
  },
  {
    title: "Iterate Continuously",
    description: "Frequent testing and stakeholder feedback refined the experience before delivery.",
    icon: RefreshIcon,
  },
  {
    title: "Design For Scale",
    description: "A reusable design system improved consistency and supported future growth.",
    icon: TrendUpIcon,
  },
];

export const THANKS_FOR_VIEWING = {
  title: "Thanks for Viewing",
  subtitle: "Digifarm Web & Mobile Case Study",
};