export type Project = {
  slug: string;
  name: string;
  description: string;
  type: string;
  language: string;
  tags: string[];
  github: string;
};

export const projects: Project[] = [
  {
    slug: "iwy",
    name: "iwy",
    description: "A clean IDE built specifically for C++.",
    type: "IDE",
    language: "C++",
    tags: ["C++", "IDE", "Developer Tool"],
    github: "https://github.com/callmelovevsick/iwy",
  },
  {
    slug: "online-judge",
    name: "online-judge",
    description: "An online judge built for my high school.",
    type: "Platform",
    language: "C++",
    tags: ["C++", "Online Judge", "Competitive Programming", "Education"],
    github: "https://github.com/callmelovevsick/online-judge",
  },
  {
    slug: "cpp",
    name: "cpp",
    description: "My collection of solutions to programming problems.",
    type: "Solutions",
    language: "C++",
    tags: ["C++", "Algorithms", "Competitive Programming", "Solutions"],
    github: "https://github.com/callmelovevsick/cpp",
  },
  {
    slug: "kompiler",
    name: "Kompiler",
    description: "My own programming language implementation, based on C++.",
    type: "Compiler",
    language: "C++",
    tags: ["C++", "Compiler", "Programming Language"],
    github: "https://github.com/callmelovevsick/Kompiler",
  },
  {
    slug: "kvm",
    name: "kvm",
    description: "A collection of malware-related libraries and experiments.",
    type: "Research",
    language: "C++",
    tags: ["C++", "Security", "Research", "Low Level"],
    github: "https://github.com/callmelovevsick/kvm",
  },
];
