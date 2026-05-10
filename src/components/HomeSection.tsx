import type { ReactNode } from "react";
import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
} from "@once-ui-system/core";
import { home } from "@/resources";

export const HomeSection = () => {
  return (
    <Column
      id="home"
      fillWidth
      horizontal="center"
      gap="m"
      paddingBottom="128"
      paddingTop="64"
      className="hero-section"
    >
      <div className="hero-glow" aria-hidden="true" />

      <Column
        maxWidth="s"
        horizontal="center"
        align="center"
        style={{ zIndex: 1, position: "relative" }}
      >
        {home.featured.display && (
          <RevealFx
            fillWidth
            horizontal="center"
            paddingTop="16"
            paddingBottom="32"
            paddingLeft="12"
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={home.featured.href}
            >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
        )}
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-l">
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            <span style={{ minHeight: "60px", display: "inline-block" }}>
              {home.subline as ReactNode}
            </span>
          </Text>
        </RevealFx>
        <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
          <Button
            id="goto-work"
            data-border="rounded"
            href="#work"
            variant="secondary"
            size="m"
            weight="default"
            arrowIcon
          >
            <Row gap="8" vertical="center" paddingRight="4">
              Explore Projects
            </Row>
          </Button>
        </RevealFx>
      </Column>
    </Column>
  );
};
