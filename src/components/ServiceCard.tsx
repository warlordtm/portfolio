"use client";

import { motion } from "framer-motion";

type Service = {
  title: string;
  desc: string;
  price: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass rounded-xl p-6 shadow-md text-center"
    >
      <h3 className="text-xl font-bold text-cyan-400">{service.title}</h3>
      <p className="text-slate-300 mt-3">{service.desc}</p>
      <p className="mt-4 text-lg font-semibold text-white">{service.price}</p>
    </motion.div>
  );
}
