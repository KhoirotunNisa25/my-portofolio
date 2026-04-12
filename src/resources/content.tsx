import type { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Khoirotun",
  lastName: "Nisa",
  name: "Khoirotun Nisa",
  role: "Frontend Developer & UI/UX Designer",
  avatar: "/images/avatar.jpg",
  email: "khoirotunnisa2507@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Get in Touch</>,
  description: <>Interested in collaborating or just want to say hi? Feel free to reach out to me.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/KhoirotunNisa25",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/khoirotun-nisa25",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/k.nis_",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:khoirotunnisa2507@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing and building user-centered digital products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">NexaCodeStudio</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Building digital products
        </Text>
      </Row>
    ),
    href: "https://www.nexacode.dev/",
  },
  subline: (
    <>
    I'm a frontend developer and UI/UX designer focused on building clean and user-friendly digital products. 
    Experienced in developing web and mobile applications, I enjoy transforming ideas into functional interfaces that solve real problems.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Malang`,
  
  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: false,
    link: "",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Khoirotun Nisa', a frontend developer and UI/UX designer based in Malang. 
        I focus on building user-centered digital products that are both functional and visually engaging. 
        Through academic projects and real-world experience, I enjoy turning ideas into meaningful digital solutions.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "NexaCodeStudio",
        timeframe: "2025 - Present",
        role: "Frontend Developer (Freelance), co-founder",
        achievements: [
          "Developed web and mobile applications as part of a small development team.",
          "Implemented UI/UX designs into functional frontend features based on client requirements.",
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "NexaCode Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PT Fahove",
        timeframe: "2025",
        role: "UI/UX Designer Intern (WFH)",
        achievements: [
          "Designed user interfaces from wireframe to prototype using Figma.",
          "Collaborated with team members to improve usability and user experience.",
        ],
        images: [],
      },
      {
        company: "Workshop Riset Informatika (WRI)",
        timeframe: "2024 - 2025",
        role: "UI/UX Mentor",
        achievements: [
          "Guided participants in learning UI/UX fundamentals using Figma.",
          "Delivered materials on user flow, wireframing, and prototyping through hands-on sessions.",
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Politeknik Negeri Malang",
        description: <>D4 Teknik Informatika (2023 - Present)</>,
      },
      {
        name: "SMAN 1 Malang",
        description: <>MIPA (2020 - 2023)</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "UI/UX Design",
        description: (
          <>Designing user flows, wireframes, and interactive prototypes using Figma.</>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Canva" },
          { name: "Wireframing" },
          { name: "Prototyping" },
          { name: "User Flow" }
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "UI UX Design",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend Development",
        description: (
          <>Building responsive interfaces using HTML, CSS, JavaScript, Next.js, and Flutter.</>
        ),
        tags: [
          { name: "JavaScript", icon: "script" },
          { name: "TypeScript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Flutter", icon: "mobile" },
          { name: "Dart" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Frontend Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web Development",
        description: (
          <>Developing web applications using Laravel and integrating backend features.</>
        ),
        tags: [
          { name: "Laravel", icon: "laravel" },
          { name: "PHP", icon: "php" },
          { name: "Python", icon: "python" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Web Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Professional Skills",
        description: (
          <>Capabilities and tools extending beyond basic development and design tasks.</>
        ),
        tags: [
          { name: "Microsoft Office" },
          { name: "Teamwork" },
          { name: "Communication" },
          { name: "Problem Solving" }
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, newsletter, home, about, work };
