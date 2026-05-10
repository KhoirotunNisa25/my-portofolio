"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Row,
  Tag,
} from "@once-ui-system/core";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  role?: string;
  tech?: string;
  github?: string;
  figma?: string;
  website?: string;
  category?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  description,
  content,
  images,
  role,
  tech,
  github,
  figma,
  website,
  category,
  priority,
}) => {
  const isUXExploration = category === "UI/UX Exploration";
  const isAIExploration = category === "AI& ML Explorration";

  return (
    <div>
      <Column
        fillWidth
        border="neutral-alpha-weak"
        radius="l"
        gap="12"
        className={styles.card}
        style={{
          overflow: "hidden",
          height: "100%",
        }}
      >
        {images?.[0] && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <Image
              src={images[0]}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <Column padding="24" gap="12" fillWidth>
          {/* Top: category badge + title */}
          <Flex fillWidth gap="8" vertical="center" horizontal="between" wrap>
            <Heading as="h3" variant="heading-strong-m" style={{ flex: 1 }}>
              {title}
            </Heading>
            {category && (
              <Tag
                size="s"
                variant={isUXExploration ? "info" : isAIExploration ? "warning" : "success"}
                label={isUXExploration ? "UI/UX" : isAIExploration ? "AI/ML" : "Product"}
              />
            )}
          </Flex>

          {/* Role & Tech */}
          {(role || tech) && (
            <Row gap="16" wrap>
              {role && (
                <Row gap="4" vertical="center">
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    👤 {role}
                  </Text>
                </Row>
              )}
              {tech && (
                <Row gap="4" vertical="center">
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    🛠 {tech}
                  </Text>
                </Row>
              )}
            </Row>
          )}

          {/* Description */}
          {description?.trim() && (
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              style={{ lineHeight: "1.6" }}
            >
              {description}
            </Text>
          )}

          {/* Links */}
          <Row gap="16" wrap paddingTop="4">
            {content?.trim() && (
              <SmartLink
                href={href}
                suffixIcon="arrowRight"
                style={{ width: "fit-content" }}
              >
                <Text variant="label-default-s">{href.startsWith('http') ? 'Website' : 'Detail'}</Text>
              </SmartLink>
            )}
            {github && (
              <SmartLink
                href={github}
                suffixIcon="arrowUpRightFromSquare"
                style={{ width: "fit-content" }}
              >
                <Text variant="label-default-s">{github.includes("docs") ? "Dokumentasi" : "GitHub"}</Text>
              </SmartLink>
            )}
            {figma && (
              <SmartLink
                href={figma}
                suffixIcon="arrowUpRightFromSquare"
                style={{ width: "fit-content" }}
              >
                <Text variant="label-default-s">Figma</Text>
              </SmartLink>
            )}
            {website && (
              <SmartLink
                href={website}
                suffixIcon="arrowUpRightFromSquare"
                style={{ width: "fit-content" }}
              >
                <Text variant="label-default-s">Website</Text>
              </SmartLink>
            )}
          </Row>
        </Column>
      </Column>
    </div>
  );
}
