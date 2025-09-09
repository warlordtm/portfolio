import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/images/qrcode.png",
    title: "QR Code Generator",
    short: "A simple QR code generator built with React & Tailwind",
    demo: "https://your-demo-link.com",
    github: "https://github.com/warlordtm/qr-code-component",
  },
  {
    image: "/images/login.png",
    title: "Login Page UI",
    short: "Beautiful responsive login page with glassmorphism",
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="flex justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
