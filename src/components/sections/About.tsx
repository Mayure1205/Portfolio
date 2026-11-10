"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, Rocket, RotateCw } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "MCA @ SPIT Mumbai",
  },
  {
    label: "Focus",
  },
  {
    icon: Rocket,
    label: "Interests",
    value: "Technology",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
  },
];

function FocusCard() {
  const [flipped, setFlipped] = useState(false);
  const face = "glass col-start-1 row-start-1 flex flex-col items-start rounded-xl p-4 backface-hidden";

  return (
    <button
      type="button"
      onClick={() => setFlipped((current) => !current)}
      className="group h-full w-full cursor-pointer rounded-xl text-left perspective-[800px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span
        className={`grid h-full transform-3d transition-transform duration-500 motion-reduce:transition-none ${flipped ? "rotate-y-180" : ""}`}
      >
        <span aria-hidden={flipped} className={face}>
          <span className="mb-2 flex w-full items-center justify-between">
            <Code size={24} className="text-primary" aria-hidden="true" />
            <RotateCw size={16} className="text-muted-foreground group-hover:text-primary" aria-hidden="true" />
          </span>
          <span className="text-xs text-muted-foreground">Focus</span>
          <span className="text-sm font-medium text-foreground">All Rounder</span>
        </span>
        <span aria-hidden={!flipped} className={`${face} gap-1`} style={{ transform: "rotateY(180deg)" }}>
          <span className="flex w-full items-center justify-between gap-2 text-sm font-medium text-foreground">
            All Rounder
            <RotateCw size={16} className="shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
          </span>
          <span className="text-xs leading-relaxed text-muted-foreground">
            My focus is full-stack development and cloud. With the right training,
            I&apos;m ready to take on new areas.
          </span>
        </span>
      </span>
    </button>
  );
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">
            {"// who am i"}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-muted-foreground">
              I&apos;m pursuing my MCA at SPIT Mumbai. With ForgeAgent and Dexter Write,
              I&apos;ve been exploring how AI fits into everyday workflows. I&apos;m looking
              for an opportunity to build and ship features end to end.
            </p>
          </motion.div>

          {/* Right - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={item.icon ? "glass rounded-xl p-4" : undefined}
              >
                {item.icon ? (
                  <>
                    <item.icon size={24} className="mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </>
                ) : (
                  <FocusCard />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
