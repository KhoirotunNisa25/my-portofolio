import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import type { Post } from "@/utils/utils";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  posts?: Post[];
}

export function Projects({ range, exclude, posts = [] }: ProjectsProps) {
  let allProjects = posts;

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth paddingX="l">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "16px",
          width: "100%",
        }}
      >
        {displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            role={post.metadata.role}
            tech={post.metadata.tech}
            github={post.metadata.github}
            figma={post.metadata.figma}
            website={post.metadata.website}
            category={post.metadata.category}
          />
        ))}
      </div>
    </Column>
  );
}
