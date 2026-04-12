"use client";

import { useState, useMemo } from "react";
import { Column, Flex, Button } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import type { Post } from "@/utils/utils";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  posts?: Post[];
}

export function Projects({ range, exclude, posts = [] }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedProjects = useMemo(() => {
    let allProjects = posts;

    if (exclude && exclude.length > 0) {
      allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
    }

    if (selectedCategory) {
      allProjects = allProjects.filter(
        (post) => post.metadata.category === selectedCategory
      );
    }

    const sortedProjects = allProjects.sort((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    });

    return range
      ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
      : sortedProjects;
  }, [posts, exclude, selectedCategory, range]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    for (const post of posts) {
      if (post.metadata.category) {
        cats.add(post.metadata.category);
      }
    }
    return Array.from(cats);
  }, [posts]);

  return (
    <Column fillWidth gap="24">
      {categories.length > 0 && (
        <Flex gap="8" wrap>
          <Button
            variant={selectedCategory === null ? "primary" : "secondary"}
            onClick={() => setSelectedCategory(null)}
            size="s"
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "primary" : "secondary"}
              onClick={() => setSelectedCategory(cat)}
              size="s"
            >
              {cat}
            </Button>
          ))}
        </Flex>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "16px",
          width: "100%",
        }}
      >
        {displayedProjects.map((post, index) => {
          let href = `/work/${post.slug}`;
          const content = post.content;
          let github = post.metadata.github;
          let website = post.metadata.website;

          if (post.slug === "nexacodestudio-landing-page") {
            href = website || "https://www.nexacode.dev/";
            website = undefined; // avoid duplicate website link
          }

          if (post.slug === "kasirq") {
            github = "https://nexa-code-studio.github.io/kasirq-docs/";
          }

          return (
            <ProjectCard
              priority={index < 2}
              key={post.slug}
              href={href}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
              role={post.metadata.role}
              tech={post.metadata.tech}
              github={github}
              figma={post.metadata.figma}
              website={website}
              category={post.metadata.category}
            />
          );
        })}
      </div>
    </Column>
  );
}
