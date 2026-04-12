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
  role,
  tech,
  github,
  figma,
  website,
  category,
}) => {
  const isUXExploration = category === "UI/UX Exploration";

  return (
    <Column
      fillWidth
      border="neutral-alpha-weak"
      radius="l"
      padding="24"
      gap="12"
      style={{
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-brand-medium)";
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "";
        el.style.boxShadow = "";
      }}
    >
      {/* Top: category badge + title */}
      <Flex fillWidth gap="8" vertical="center" horizontal="between" wrap>
        <Heading as="h3" variant="heading-strong-m" style={{ flex: 1 }}>
          {title}
        </Heading>
        {category && (
          <Tag
            size="s"
            variant={isUXExploration ? "info" : "success"}
            label={isUXExploration ? "UI/UX" : "Product"}
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
            <Text variant="label-default-s">Detail</Text>
          </SmartLink>
        )}
        {github && (
          <SmartLink
            href={github}
            suffixIcon="arrowUpRightFromSquare"
            style={{ width: "fit-content" }}
          >
            <Text variant="label-default-s">GitHub</Text>
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
  );
};
