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
} from "lucide-react";

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

// ---- Research, Solution, Impact, Reflection ----
// Add these the same way once we build each section:
// export const RESEARCH_... = [...]
// export const SOLUTION_... = [...]