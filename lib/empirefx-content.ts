import type { LucideIcon } from "lucide-react";
import {
  Airplay,
  Send,
  Layers,
  LineChart,
  GitFork,
  Check,
  Landmark,
  Database,
  Smartphone,
  Minimize2,
  User,
  Monitor,
  Users,
  BarChart3,
  TrendingUp,
  Repeat,
  GitPullRequest,
  CreditCard,
  CheckCircle2,
  Wrench,
  Shield,
  Compass,
  ArrowLeftRight,
  Presentation,
  LayoutGrid,
  AppWindow,
  Info,
  Target,
  Pencil,
  Shuffle,
  PieChart,
  Zap,
  Star,
  Globe,
  Image as ImageIcon,
  Lightbulb,
  Heart,
} from "lucide-react";

export type IconPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const OVERVIEW_POINTS: IconPoint[] = [
  {
    title: "The Product",
    description:
      "A regulated forex trading platform enabling users to trade global markets across web and mobile.",
    icon: Airplay,
  },
  {
    title: "My Role",
    description:
      "Improved the platform through UX strategy, feature enhancements, and scalable design systems.",
    icon: Send,
  },
  {
    title: "What I Did",
    description:
      "Enhanced onboarding, trading, payments, marketing, and design systems across web and mobile.",
    icon: Layers,
  },
  {
    title: "Outcome",
    description:
      "Simplified trading experiences through continuous product improvements and consistent design.",
    icon: LineChart,
  },
];

export const OVERVIEW_STATS = [
  { value: "20+", label: "Product Improvements", icon: TrendingUp },
  { value: "10+", label: "Core Workflows Enhanced", icon: GitPullRequest },
  { value: "3", label: "Product Experiences", icon: Monitor },
  { value: "2", label: "Design Systems Maintained", icon: Database },
];

export const CHALLENGE_INTRO = {
  title: "Understanding the Challenge",
  description:
    "As Empire FX expanded its trading services, the platform needed to support new features, regulatory requirements, and evolving user expectations. The challenge was to improve complex financial experiences without disrupting existing user workflows.",
};

export const CHALLENGE_LIST: IconPoint[] = [
  {
    title: "Complex Trading Workflows",
    description:
      "Simplify trading journeys and financial tasks while preserving the flexibility required by traders.",
    icon: GitFork,
  },
  {
    title: "Product Consistency",
    description:
      "Establish consistent interactions and reusable design patterns across web and mobile experiences.",
    icon: Check,
  },
  {
    title: "Business & Compliance",
    description:
      "Balance business objectives, regulatory requirements, and user needs to deliver intuitive experiences.",
    icon: Landmark,
  },
  {
    title: "Scalable Growth",
    description: "Create scalable design solutions that support continuous feature releases.",
    icon: LineChart,
  },
];

export const CHALLENGE_CARDS: IconPoint[] = [
  {
    title: "Information Density",
    description: "Present complex financial data in a clear, scannable, and intuitive way.",
    icon: Database,
  },
  {
    title: "Funding Experience",
    description: "Simplify deposit and withdrawal flows to reduce friction and build trust.",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform Consistency",
    description: "Maintain familiar experiences across Web, Android, and iOS.",
    icon: Minimize2,
  },
  {
    title: "User Confidence",
    description: "Build trust through transparent workflows and clear user feedback.",
    icon: User,
  },
  {
    title: "Technical Constraints",
    description: "Design within an existing platform while supporting ongoing improvements.",
    icon: Monitor,
  },
];

export const DISCOVERY_INTRO = {
  title: "Overview",
  description:
    "Every improvement started with understanding user needs, business priorities, and technical constraints. Rather than relying on a single research method, I combined stakeholder feedback, competitive analysis, product requirements, and iterative validation to guide design decisions.",
};

export const DISCOVERY_METHODS: IconPoint[] = [
  {
    title: "Stakeholder Workshops",
    description:
      "Aligned product goals, technical feasibility, and user needs across cross-functional teams.",
    icon: Users,
  },
  {
    title: "User & Business Insights",
    description: "Identified user pain points and business priorities to guide product decisions.",
    icon: BarChart3,
  },
  {
    title: "Competitive Analysis",
    description: "Reviewed leading platforms to uncover best practices and improvement opportunities.",
    icon: TrendingUp,
  },
  {
    title: "Iterative Validation",
    description:
      "Refined solutions through reviews, feedback, and developer collaboration before release.",
    icon: Repeat,
  },
];

export const KEY_INSIGHTS: IconPoint[] = [
  {
    title: "Simplify Trading Workflows",
    description: "Reduced friction by streamlining core trading actions and navigation.",
    icon: GitPullRequest,
  },
  {
    title: "Improve Funding Experience",
    description: "Simplified deposit and withdrawal journeys to build trust and speed.",
    icon: CreditCard,
  },
  {
    title: "Data & Information Clarity",
    description: "Improved visual hierarchy to make financial data easier to understand.",
    icon: CheckCircle2,
  },
  {
    title: "Cross-Platform Consistency",
    description: "Created familiar interactions across Web, Android, and iOS.",
    icon: Wrench,
  },
  {
    title: "Compliance with Trust",
    description: "Integrated regulatory requirements without compromising usability.",
    icon: Shield,
  },
  {
    title: "Design System Adoption",
    description: "Expanded reusable components to improve consistency and delivery speed.",
    icon: Layers,
  },
];

export const INITIATIVES_INTRO =
  "I led the redesign and enhancement of key trading experiences across web and mobile, focusing on usability, consistency, and scalable design solutions. My work spanned trading, payments, onboarding, marketing, and design system improvements.";

export const INITIATIVE_TABS = [
  { label: "Dashboard", icon: Airplay },
  { label: "Trading", icon: AppWindow },
  { label: "Payments", icon: ArrowLeftRight },
  { label: "Copy Trading", icon: Presentation },
  { label: "Onboarding", icon: Smartphone },
  { label: "Design System", icon: Layers },
];

export const DASHBOARD_INITIATIVE = {
  title: "Dashboard & Home Experience",
  description:
    "Redesigned the dashboard to surface key account information, simplify navigation, and help traders make faster, more informed decisions.",
  platforms: "Web • iOS • Android",
  problem: "Complex trading data and limited hierarchy made key actions difficult to find.",
  goal: "Simplify the dashboard with clearer insights, intuitive navigation, and faster access to core actions.",
  contributions: [
    {
      title: "Information Architecture",
      description: "Reorganized dashboard content around user priorities.",
      icon: GitPullRequest,
    },
    {
      title: "Interaction Design",
      description: "Introduced Quick Actions for faster task completion.",
      icon: Shuffle,
    },
    {
      title: "Data Visualization",
      description: "Simplified charts and account insights.",
      icon: PieChart,
    },
    {
      title: "Visual Design",
      description: "Improved hierarchy, spacing, and consistency.",
      icon: Monitor,
    },
    {
      title: "Design System",
      description: "Expanded reusable components and patterns.",
      icon: Layers,
    },
    {
      title: "Collaboration",
      description: "Worked closely with Product and Engineering.",
      icon: Users,
    },
  ],
  impacts: [
    {
      value: "35%",
      label: "Faster Access",
      description: "Reorganized dashboard content around user priorities.",
      icon: Zap,
    },
    {
      value: "28%",
      label: "Task Done",
      description: "Simplified user flows reduced friction across journeys.",
      icon: Check,
    },
    {
      value: "42%",
      label: "Info Clarity",
      description: "Better hierarchy and visual grouping made account insights easier to scan.",
      icon: Info,
    },
    {
      value: "60%",
      label: "Components",
      description: "Expanded reusable patterns accelerated feature delivery.",
      icon: Layers,
    },
    {
      value: "100%",
      label: "Platform Consistency",
      description: "Unified experiences across Web, iOS, and Android.",
      icon: CheckCircle2,
    },
    {
      value: "50%",
      label: "Design Efficiency",
      description: "Reusable components and standardized patterns.",
      icon: Smartphone,
    },
  ],
  takeaway:
    "A thoughtful redesign that simplifies complex trading workflows through better hierarchy, faster interactions, and a scalable design system.",
  galleryIntro:
    "A visual showcase of the EmpireFX platform, highlighting intuitive workflows, powerful trading tools, and a seamless user experience.",
  galleryHighlight: {
    title: "Data-Driven Decisions",
    description: "Powerful insights and real-time analytics to support confident trading.",
    icon: ImageIcon,
  },
};

export const IMPACT_INTRO =
  "Continuous product improvements across trading, payments, and onboarding made complex financial workflows clearer, faster, and more consistent on web and mobile.";

export const IMPACT_CARDS = [
  {
    pill: "Efficiency",
    title: "Faster Workflows",
    description: "Refined solutions through reviews, feedback, and iteration.",
    icon: Repeat,
  },
  {
    pill: "Usability",
    title: "Clearer Journeys",
    description: "Simplified trading and funding flows reduced friction for users.",
    icon: Compass,
  },
  {
    pill: "Growth",
    title: "Product Coverage",
    description: "Supported new features without disrupting existing trader workflows.",
    icon: TrendingUp,
  },
  {
    pill: "Scalability",
    title: "Design Systems",
    description: "Reusable patterns accelerated consistent delivery across platforms.",
    icon: Layers,
  },
];

export const REFLECTION_INTRO =
  "Building EmpireFX was more than designing trading screens—it was about creating tools that help traders make faster, more confident decisions every day.";

export const REFLECTION_CARDS: IconPoint[] = [
  {
    title: "Users First",
    description: "Listening to users uncovered real needs and shaped better product decisions.",
    icon: Repeat,
  },
  {
    title: "Simplicity Wins",
    description: "Simple experiences drive faster adoption and greater user confidence.",
    icon: Repeat,
  },
];

export const REFLECTION_QUOTE =
  "Great products don't begin with technology—they begin with understanding people.";

export const REFLECTION_MORE: IconPoint[] = [
  {
    title: "Design Through Iteration",
    description: "Continuous feedback helped refine ideas into effective solutions.",
    icon: Repeat,
  },
  {
    title: "Cross-functional Collaboration",
    description: "Strong teamwork turned insights into impactful products.",
    icon: Repeat,
  },
];

export const KEY_TAKEAWAYS_INTRO =
  "This project reinforced that impactful products are built through empathy, continuous learning, and strong collaboration.";

export const KEY_TAKEAWAYS: IconPoint[] = [
  {
    title: "Human-Centered Design",
    description: "Empathy leads to meaningful experiences.",
    icon: Repeat,
  },
  {
    title: "Validate Early",
    description: "Test, learn, and improve continuously.",
    icon: Repeat,
  },
  {
    title: "Design for Clarity",
    description: "Simple products are easier to adopt.",
    icon: Users,
  },
  {
    title: "Build Together",
    description: "Great products are built through teamwork.",
    icon: Repeat,
  },
];

export const THANKS_FOR_VIEWING = {
  title: "Thanks for Viewing",
  subtitle: "EmpireFX Web & Mobile Case Study",
};

export const DASHBOARD_ICONS = {
  header: LayoutGrid,
  problem: Info,
  goal: Target,
  contributions: Pencil,
  impact: Target,
  takeaway: Star,
  lightbulb: Lightbulb,
  heart: Heart,
  globe: Globe,
};
