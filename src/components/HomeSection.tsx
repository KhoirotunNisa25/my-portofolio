"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
} from "@once-ui-system/core";
import { home, about, person } from "@/resources";
import { TypeAnimation } from "react-type-animation";

export const HomeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <Column
      id="home"
      fillWidth
      horizontal="center"
      gap="m"
      paddingBottom="128"
      paddingTop="64"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: "relative" }}
    >
      {/* Animated Hover Glow Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, var(--brand-alpha-weak, rgba(128, 128, 128, 0.1)), transparent 50%)`,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
          borderRadius: "var(--radius-l)", // Optional: soft corners if you want
        }}
      />

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
              <TypeAnimation
                sequence={[
                  "Frontend Developer.",
                  1000,
                  "UI/UX Designer.",
                  1000,
                  "Creative Problem Solver.",
                  1000,
                  "Digital Product Builder.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                style={{ display: "inline-block" }}
              />
            </span>
          </Text>
        </RevealFx>
        <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
          <Button
            id="goto-work"
            data-border="rounded"
            onClick={() => {
              document.getElementById("work")?.scrollIntoView({ behavior: 'smooth' });
            }}
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
