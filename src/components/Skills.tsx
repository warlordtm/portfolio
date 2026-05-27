"use client";

import { FaReact, FaNodeJs, FaJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiShadcnui, SiMongodb,
  SiSupabase, SiFramer, SiTypescript, SiFigma, SiPostgresql,
  SiPrisma, SiVercel,
} from "react-icons/si";

const SKILLS = [
  { name: "React",         icon: <FaReact className="text-cyan-400" />,            col: "text-cyan-400"    },
  { name: "Next.js",       icon: <SiNextdotjs className="text-white" />,           col: "text-white"       },
  { name: "TypeScript",    icon: <SiTypescript className="text-blue-400" />,       col: "text-blue-400"    },
  { name: "JavaScript",    icon: <FaJs className="text-yellow-400" />,             col: "text-yellow-400"  },
  { name: "Tailwind CSS",  icon: <SiTailwindcss className="text-sky-400" />,       col: "text-sky-400"     },
  { name: "shadcn/ui",     icon: <SiShadcnui className="text-purple-400" />,       col: "text-purple-400"  },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" />,           col: "text-pink-400"    },
  { name: "Node.js",       icon: <FaNodeJs className="text-green-500" />,          col: "text-green-500"   },
  { name: "MongoDB",       icon: <SiMongodb className="text-green-400" />,         col: "text-green-400"   },
  { name: "PostgreSQL",    icon: <SiPostgresql className="text-sky-500" />,        col: "text-sky-500"     },
  { name: "Supabase",      icon: <SiSupabase className="text-emerald-400" />,      col: "text-emerald-400" },
  { name: "Prisma",        icon: <SiPrisma className="text-slate-300" />,          col: "text-slate-300"   },
  { name: "Databases",     icon: <FaDatabase className="text-blue-400" />,         col: "text-blue-400"    },
  { name: "Git",           icon: <FaGitAlt className="text-orange-400" />,         col: "text-orange-400"  },
  { name: "Vercel",        icon: <SiVercel className="text-white" />,              col: "text-white"       },
  { name: "Figma",         icon: <SiFigma className="text-pink-500" />,            col: "text-pink-500"    },
];

function SkillPill({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 mx-3 rounded-2xl flex-shrink-0 transition-all duration-200 cursor-default select-none"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.4)";
        (e.currentTarget as HTMLElement).style.background  = "rgba(139,92,246,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.background  = "rgba(255,255,255,0.04)";
      }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: "#CBD5E1" }}>
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const row1 = SKILLS.slice(0, 8);
  const row2 = SKILLS.slice(8);

  return (
    <section
      id="skills"
      className="py-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #090d1f 0%, #050816 100%)" }}
    >
      {/* Section header */}
      <div className="text-center mb-14 px-6">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#8B5CF6" }}>
          What I Work With
        </p>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          My{" "}
          <span className="gradient-text">Tech Stack</span>
        </h2>
        <div className="section-divider mt-6 max-w-xs mx-auto" />
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-4" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="marquee-track">
          {[...row1, ...row1].map((skill, i) => (
            <SkillPill key={`r1-${i}`} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="marquee-track-reverse">
          {[...row2, ...row2].map((skill, i) => (
            <SkillPill key={`r2-${i}`} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
