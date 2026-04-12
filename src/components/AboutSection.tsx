"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Row,
  RevealFx,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Timeline Item Component ─────────────────────────────────────────────────
// Each item has a dot + animated fill line based on scroll progress
interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem = ({ children, isLast = false }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    // Start animating when top of item hits 80% of viewport, done at 20%
    offset: ["start 0.8", "start 0.2"],
  });

  // The line fill goes from 0% height to 100% as you scroll past
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Dot fills from empty to solid
  const dotScale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div
      ref={itemRef}
      style={{
        display: "flex",
        gap: "24px",
        position: "relative",
      }}
    >
      {/* ── Left: dot + vertical line ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          paddingTop: "6px",
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "2px solid var(--color-brand-medium, #3b82f6)",
            position: "relative",
            flexShrink: 0,
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        >
          {/* Inner fill animated */}
          <motion.div
            style={{
              position: "absolute",
              inset: "2px",
              borderRadius: "50%",
              backgroundColor: "var(--color-brand-medium, #3b82f6)",
              scale: dotScale,
            }}
          />
        </div>

        {/* Vertical line (hidden on last item) */}
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "2px",
              backgroundColor: "var(--color-neutral-alpha-weak, rgba(255,255,255,0.1))",
              marginTop: "8px",
              position: "relative",
              overflow: "hidden",
              minHeight: "40px",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: lineHeight,
                backgroundColor: "var(--color-brand-medium, #3b82f6)",
              }}
            />
          </div>
        )}
      </div>

      {/* ── Right: actual content ── */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : "40px" }}>
        {children}
      </div>
    </div>
  );
};

// ─── Section with stacked title ───────────────────────────────────────────────
interface TimelineSectionProps {
  title: string;
  children: React.ReactNode;
}

const TimelineSection = ({ title, children }: TimelineSectionProps) => {
  return (
    <RevealFx translateY="16">
      <Column fillWidth marginBottom="48">
        {/* Title di atas, sejajar dengan konten */}
        <Heading as="h2" variant="display-strong-s" marginBottom="32">
          {title}
        </Heading>
        {/* Timeline items */}
        <div style={{ paddingLeft: "0" }}>
          {children}
        </div>
      </Column>
    </RevealFx>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div ref={ref} id="about" style={{ width: "100%" }}>
      <Column maxWidth="m" fillWidth paddingBottom="128" paddingTop="128">
        <Row fillWidth s={{ direction: "column" }} horizontal="center" gap="48">
          {/* ── Avatar sidebar ── */}
          {about.avatar.display && (
            <Column
              className={styles.avatar}
              top="64"
              fitHeight
              position="sticky"
              s={{ position: "relative", style: { top: "auto" } }}
              xs={{ style: { top: "auto" } }}
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
              as={motion.div}
              // @ts-expect-error: Style conflict between UI core and Framer Motion
              style={{ y: avatarY }}
            >
              <Avatar src={person.avatar} size="xl" />
              <Row gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Row>
              {person.languages && person.languages.length > 0 && (
                <Row wrap gap="8">
                  {person.languages.map((language) => (
                    <Tag key={language} size="l">
                      {language}
                    </Tag>
                  ))}
                </Row>
              )}
            </Column>
          )}

          {/* ── Main content ── */}
          <Column
            className={styles.blockAlign}
            flex={9}
            maxWidth={40}
            as={motion.div}
            // @ts-expect-error: Style conflict between UI core and Framer Motion
            style={{ y: contentY }}
          >
            {/* ── Hero / intro block ── */}
            <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
              {about.calendar.display && (
                <RevealFx translateY="8">
                  <Row
                    fitWidth
                    border="brand-alpha-medium"
                    background="brand-alpha-weak"
                    radius="full"
                    padding="4"
                    gap="8"
                    marginBottom="m"
                    vertical="center"
                    className={styles.blockAlign}
                    style={{ backdropFilter: "blur(var(--static-space-1))" }}
                  >
                    <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                    <Row paddingX="8">Schedule a call</Row>
                    <IconButton
                      href={about.calendar.link}
                      data-border="rounded"
                      variant="secondary"
                      icon="chevronRight"
                    />
                  </Row>
                </RevealFx>
              )}

              <RevealFx translateY="12" delay={0.1}>
                <Heading className={styles.textAlign} variant="display-strong-xl">
                  {person.name}
                </Heading>
              </RevealFx>

              <RevealFx translateY="12" delay={0.2}>
                <Text
                  className={styles.textAlign}
                  variant="display-default-xs"
                  onBackground="neutral-weak"
                >
                  {person.role}
                </Text>
              </RevealFx>

              {social.length > 0 && (
                <RevealFx translateY="12" delay={0.3}>
                  <Row
                    className={styles.blockAlign}
                    paddingTop="20"
                    paddingBottom="8"
                    gap="8"
                    wrap
                    horizontal="center"
                    fitWidth
                    data-border="rounded"
                  >
                    {social
                      .filter((item) => item.essential)
                      .map(
                        (item) =>
                          item.link && (
                            <React.Fragment key={item.name}>
                              <Row s={{ hide: true }}>
                                <Button
                                  href={item.link}
                                  prefixIcon={item.icon}
                                  label={item.name}
                                  size="s"
                                  weight="default"
                                  variant="secondary"
                                />
                              </Row>
                              <Row hide s={{ hide: false }}>
                                <IconButton
                                  size="l"
                                  href={item.link}
                                  icon={item.icon}
                                  variant="secondary"
                                />
                              </Row>
                            </React.Fragment>
                          ),
                      )}
                  </Row>
                </RevealFx>
              )}
            </Column>

            {/* ── Intro description ── */}
            {about.intro.display && (
              <RevealFx translateY="16" delay={0.2}>
                <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                  {about.intro.description}
                </Column>
              </RevealFx>
            )}

            {/* ── Work Experience (timeline) ── */}
            {about.work.display && (
              <TimelineSection title={about.work.title}>
                {about.work.experiences.map((experience, index) => (
                  <TimelineItem
                    key={`${experience.company}-${experience.role}-${index}`}
                    isLast={index === about.work.experiences.length - 1}
                  >
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, i: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${i}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                  </TimelineItem>
                ))}
              </TimelineSection>
            )}

            {/* ── Education (timeline) ── */}
            {about.studies.display && (
              <TimelineSection title={about.studies.title}>
                {about.studies.institutions.map((institution, index) => (
                  <TimelineItem
                    key={`${institution.name}-${index}`}
                    isLast={index === about.studies.institutions.length - 1}
                  >
                    <Column gap="4">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>

                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </TimelineItem>
                ))}
              </TimelineSection>
            )}

            {/* ── Technical Skills (timeline) ── */}
            {about.technical.display && (
              <TimelineSection title={about.technical.title}>
                {about.technical.skills.map((skill, index) => (
                  <TimelineItem
                    key={`${skill.title}-${index}`}
                    isLast={index === about.technical.skills.length - 1}
                  >
                    <Column gap="4">
                      <Text id={skill.title} variant="heading-strong-l">
                        {skill.title}
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.tags && skill.tags.length > 0 && (
                        <Row wrap gap="8" paddingTop="8">
                          {skill.tags.map((tag, tagIndex) => (
                            <Tag
                              key={`${skill.title}-${tagIndex}`}
                              size="l"
                              prefixIcon={tag.icon}
                            >
                              {tag.name}
                            </Tag>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </TimelineItem>
                ))}
              </TimelineSection>
            )}
          </Column>
        </Row>
      </Column>
    </motion.div>
  );
};