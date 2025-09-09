import ServiceCard from "./ServiceCard";

const services = [
  { title: "Basic", desc: "Responsive login/landing page", price: "$70" },
  { title: "Standard", desc: "Multi-page animated website", price: "$150" },
  { title: "Premium", desc: "Full-stack SaaS with dashboard & API", price: "$500" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </section>
  );
}
