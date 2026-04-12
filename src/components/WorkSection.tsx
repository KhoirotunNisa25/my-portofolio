"use client";

import { Column, Heading, RevealFx } from "@once-ui-system/core";
import { work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Post } from "@/utils/utils";

interface WorkSectionProps {
  posts?: Post[];
}

export const WorkSection = ({ posts }: WorkSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div ref={ref} id="work" style={{ width: "100%", y: contentY }}>
      <Column maxWidth="m" paddingTop="24" paddingBottom="128" fillWidth>
        <RevealFx translateY="12">
          <Heading marginBottom="xl" variant="display-strong-s" align="center">
            {work.title}
          </Heading>
        </RevealFx>
        <RevealFx translateY="16" delay={0.2}>
          <Projects posts={posts} />
        </RevealFx>
      </Column>
    </motion.div>
  );
};
