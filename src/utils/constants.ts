import { DesktopIcon, MobileIcon, OtherDevices } from "@/styles/icon";
import { FaTwitter, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { MdExposure, MdOutlineDynamicForm } from "react-icons/md";
import { GiTreeGrowth, GiReceiveMoney, GiTeamIdea } from "react-icons/gi";
import { FcCollaboration, FcPositiveDynamic } from "react-icons/fc";

// TODO: Change link to socials
export const socials = [
  {
    link: "https://www.linkedin.com/company/natterbase/",
    icon: FaLinkedinIn,
  },
  {
    link: "https://twitter.com/natterbase",
    icon: FaTwitter,
  },
  {
    link: "https://medium.com/@Natterbase.ng",
    icon: FaMediumM,
  },
  // {
  //   link: "https://www.instagram.com/completefarmer",
  //   icon: FaInstagram,
  // },
];

export const breakpoints = {
  SMALL: 400, // 375
  MOBILE: 750, // 375
  TABLET: 1279, // 768
};

export const goLive = [
  {
    title: "Your Product",
    subText: "Your product, perfectly scoped by world-class product architects",
  },
  {
    title: "Broken down into tiny Reusable bits",
    subText:
      "Broken down into tiny bits, that can be developed in parallel as micro units",
  },
  {
    title: "Developed by multiple independent builders",
    subText:
      "Developed by talented software developers while maintaining code level consistency and protecting your full source code",
  },
  {
    title: "Reassembled and delivered liked you imagined",
    subText:
      "Reassembled by our AI-powered development tool, in seconds, presenting you with a finished product, ready to GoLive",
  },
];

export const smartSystem = [
  {
    title: "Visibility",
    text: "We expedite code visibility that captures the various (what, why, and where) aspects of your code base, thereby ensuring the completion of knowledge building and transfers.",
    subText:
      "Using Zeedas, code visibility automatically captures knowledge for aspects of your code base and dynamically grows it.",
    image: "/images/svg/one.svg",
    mobileImage: "/images/svg/line-one.svg",
    imageAlt: "First",
  },
  {
    title: "Code Reusability",
    text: "We thrive on well-tested code, which has been reviewed multiple times, leading to improved quality and optimized performance. When developers reuse such code, it helps improve the overall efficiency of the software or application.",
    image: "/images/svg/two.svg",
    mobileImage: "/images/svg/line-two.svg",
    imageAlt: "Second",
  },
  {
    title: "Forecasting",
    text: "Go live when you decide; days or weeks. You get to forecast accurately with a margin of error to make informed estimates about the direction of your software.",
    image: "/images/svg/three.svg",
    mobileImage: "/images/svg/line-three.svg",
    imageAlt: "Third",
  },
  {
    title: "In-app Payment",
    image: "/images/svg/four.svg",
    mobileImage: "/images/svg/line-four.svg",
    text: "We create and support intelligent in-app payments - including virtual goods and renewals, and support various credit cards and popular payment methods in-app adequately integrated.",
    imageAlt: "Fourth",
  },
];

export const caseStudy = [
  {
    image: "/images/svg/case-1.svg",
    heading: "Breen",
    text: "An immersive hotel, rooted in nature, on the edge of one of Norway’s most awe inspiring fjords.",
  },
  {
    image: "/images/svg/case-2.svg",
    heading: "Breen",
    text: "An immersive hotel, rooted in nature, on the edge of one of Norway’s most awe inspiring fjords.",
  },
  {
    image: "/images/svg/case-three.svg",
    heading: "Breen",
    text: "An immersive hotel, rooted in nature, on the edge of one of Norway’s most awe inspiring fjords.",
  },
  {
    image: "/images/svg/case-four.svg",
    heading: "Breen",
    text: "An immersive hotel, rooted in nature, on the edge of one of Norway’s most awe inspiring fjords.",
  },
];

export const clients = [
  {
    id: 1,
    logo: "/images/svg/access-logo.svg",
    image: "/images/jpg/handsome.jpg",
    name: "Razaq Ahmed",
    position: "CEO",
    company: "Access Bank",
    review:
      "It took a lot less time than I anticipated for Natterbase to roll out my product. The level of professionalism was exactly as advertised.”",
  },
  {
    id: 2,
    logo: "/images/svg/alat-logo.svg",
    image: "/images/jpg/evans.jpg",
    name: "Julia Evans",
    position: "CEO",
    company: "  Alat",
    review:
      "It took a lot less time than I anticipated for Natterbase to roll out my product. The level of professionalism was exactly as advertised.”",
  },
  {
    id: 3,
    logo: "/images/svg/diamond-logo.svg",
    image: "/images/jpg/handsome.jpg",
    name: "Razaq Ahmed",
    position: "CEO",
    company: "Diamond",
    review:
      "It took a lot less time than I anticipated for Natterbase to roll out my product. The level of professionalism was exactly as advertised.”",
  },
  {
    id: 4,
    logo: "/images/svg/fidelity-logo.svg",
    image: "/images/jpg/evans.jpg",
    name: "Razaq Evans",
    position: "CTO",
    company: "Fidelity",
    review:
      "It took a lot less time than I anticipated for Natterbase to roll out my product. The level of professionalism was exactly as advertised.”",
  },
  {
    id: 5,
    logo: "/images/svg/providus-bank.svg",
    image: "/images/jpg/handsome.jpg",
    name: "Razaq Ahmed",
    position: "CEO",
    company: "Providus Bank",
    review:
      "It took a lot less time than I anticipated for Natterbase to roll out my product. The level of professionalism was exactly as advertised.”",
  },
];

export const howItWorks = [
  {
    icon: "/images/svg/devices.svg",
    heading: "We Pre-vet talents and teams",
    text: "Spend less time interviewing and hiring to work with our top talents who have taken rigorous tests, covering all major tech stacks and remote work soft skills.",
    span: "We only accept the best of the best.",
  },
  {
    icon: "/images/svg/cloud.svg",
    heading: "Assemble a team",
    text: "Learn everything you need to know about potential hires. We monitor the accuracy and progress of our talents through monitoring and evaluations.",
  },
  {
    icon: "/images/svg/world.svg",
    heading: "Create Workspace",
    text: "Use recommend a tool to customize your workflows, define modules, assign tasks, and monitor your project’s execution with ease. We monitor the work put in by each talent, and adjust dynamically.",
  },
  {
    icon: "/images/svg/devices.svg",
    heading: "Work According to your financial Pace",
    text: "No pressure, Each product is unique, and we work with a payment plan in line with milestones agreed upon. ",
  },
];

export const motivatedTeams = [
  {
    image: "/images/svg/man-in-chair.svg",
    imageAlt: "man in chair",
    heading: "Motivated Teams",
    text: "Our teams deliver great quality at incredible speed, our system is designed to keep engineers, and product teams motivated, and we determine their hourly rate using their speed and accuracy, our recorded speed increases the faster they deliver, and accuracy increases with the quality of their deliveries,",
    span: "what an incentive right?",
  },
  {
    image: "/images/svg/payment-plan.svg",
    imageAlt: "payment plan",
    heading: "Pay as you go",
    text: "You only pay when measurable milestones have been reached. We directly tie your cost to delivery, no more wasted expenses, just pay as you go.",
  },
];

export const contactInfo = [
  {
    title: "General Inquiries",
    email: "hello@natterbase.com",
  },
  {
    title: "New Business",
    email: "bethel@natterbase.com",
  },
  {
    title: "Investors",
    email: "Investors@natterbase.com",
  },
];

// For start project options
export const teamList = [
  { value: "Full-Stack Developer", label: "Full-Stack Developer" },
  { value: "Front-End Developer", label: "Front-End Developer" },
  { value: "Back-End Developer", label: "Back-End Developer" },
  { value: "Project Manager", label: "Project Manager" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "QA Engineer", label: "QA Engineer" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
];

export const hiringNeed = [
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
];

export const programmingLanguages = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "C++", label: "C++" },
  { value: "C", label: "C" },
  { value: "Go", label: "Go" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "PHP", label: "PHP" },
  { value: "Swift", label: "Swift" },
  { value: "R", label: "R" },
  { value: "Ruby", label: "Ruby" },
  { value: "Wordpress", label: "Wordpress" },
];

export const projectDevices = [
  {
    icon: DesktopIcon,
    title: "Desktop",
  },
  {
    icon: MobileIcon,
    title: "Mobile",
  },
  {
    icon: OtherDevices,
    title: "Others",
  },
];

export const brands = [
  {
    logo: "/images/logos/zeedas-logo.png",
    website: "https://www.zeedas.com/",
    alt: "Zeedas",
  },
  {
    logo: "/images/logos/acaf-logo.svg",
    website: " https://www.acafoundation.com/",
    alt: "African Capital Alliance Foundation",
  },
  {
    logo: "/images/logos/africa-prudential-logo.svg",
    website: "https://africaprudential.com/",
    alt: "Africa Prudential",
  },
  {
    logo: "/images/logos/health-tracka-logo.svg",
    website: "https://healthtracka.com/",
    alt: "Health Tracka",
  },
  {
    logo: "/images/logos/nibss-logo.svg",
    website: "https://www.nibss-plc.com.ng/ ",
    alt: "Nibbs",
  },
  {
    logo: "/images/logos/heritage-logo.svg",
    website: "#",
    alt: "Heritage Bank",
  },
  {
    logo: "/images/logos/powercube-logo.svg",
    website: "#",
    alt: "Power Cube",
  },
  {
    logo: "/images/logos/access-logo.svg",
    website: "#",
    alt: "Access Bank",
  },
  {
    logo: "/images/logos/alat-logo.svg",
    website: "#",
    alt: "Alat by Wema",
  },
  {
    logo: "/images/logos/fidelity-logo.svg",
    website: "#",
    alt: "Fidelity",
  },
  {
    logo: "/images/logos/providus-logo.svg",
    website: "#",
    alt: "Providus bank",
  },
];

export const partners = [
  {
    logo: "/images/logos/microsoft-logo.png",
    alt: "Microsoft",
  },
  {
    logo: "/images/logos/aws-logo.jpg",
    alt: "AWS",
  },
  {
    logo: "/images/logos/google-logo.png",
    alt: "Google",
  },
  {
    logo: "/images/logos/ios-logo.png",
    alt: "IOS",
  },
  {
    logo: "/images/logos/android-logo.png",
    alt: "Android",
  },
  {
    logo: "/images/logos/flutterwave-logo.png",
    alt: "Flutterwave",
  },
  {
    logo: "/images/logos/paystack-logo.png",
    alt: "Paystack",
  },
  {
    logo: "/images/logos/stripe-logo.png",
    alt: "Stripe",
  },
  {
    logo: "/images/logos/atlassian-logo.png",
    alt: "Atlassian",
  },
  {
    logo: "/images/logos/slack-logo.png",
    alt: "Slack",
  },
];

export const whyWork = [
  {
    title: "Exposure to various projects",
    icon: MdExposure,
    text: "At Natterbase, you may work on projects for various clients with unique needs and challenges. This can provide you with valuable experience and exposure to different technologies, industries, and problem domains, which can help you grow and develop as an engineer, product manager, or designer.",
  },
  {
    title: "Opportunities for learning and growth",
    icon: GiTreeGrowth,
    text: "We prioritize ongoing learning and development for our employees. This may include training programs, conferences, hackathons, and other opportunities to build skills and stay up-to-date with the latest technologies and trends.",
  },
  {
    title: "Collaborative environment",
    icon: GiTeamIdea,
    text: "We operate a collaborative and team-oriented culture where engineers work closely with designers, project managers, and other stakeholders. This can help you build strong working relationships, develop communication skills, and learn from others with different perspectives and expertise.",
  },
  {
    title: "Fast-paced and dynamic work",
    icon: MdOutlineDynamicForm,
    text: "We typically work on tight deadlines and have a fast-paced environment. This can be exciting and challenging for engineers who enjoy working under pressure and thrive in a constantly evolving landscape.",
  },
  {
    title: "Competitive compensation and benefits",
    icon: GiReceiveMoney,
    text: "We offer competitive compensation packages, including salary, benefits, and perks such as flexible work arrangements and unlimited vacation time.",
  },
];
