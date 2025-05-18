import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Members", value: 10000, suffix: "+" },
  { label: "Total Paid Out", value: 2000000, prefix: "KSH ", suffix: "+" },
  { label: "Payout Success", value: 98, suffix: "%" },
];

export const StatsSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto text-center px-6">
      <motion.h2
        className="text-3xl font-bold mb-10 text-dark"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trendyqash in Numbers
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-md p-6 bg-overlay text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <p className="text-4xl font-extrabold text-primary mb-2">
              <CountUp
                end={stat.value}
                duration={2}
                separator=","
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
              />
            </p>
            <p className="text-lg text-muted-foreground font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
