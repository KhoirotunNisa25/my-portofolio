import { Column, Heading, RevealFx } from "@once-ui-system/core";
import { work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import type { Post } from "@/utils/utils";

interface WorkSectionProps {
  posts?: Post[];
}

export const WorkSection = ({ posts }: WorkSectionProps) => {
  return (
    <div id="work" style={{ width: "100%" }}>
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
    </div>
  );
};
