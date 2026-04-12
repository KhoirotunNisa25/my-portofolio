"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Row,
  RevealFx,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different elements
  const avatarY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div ref={ref} id="about" style={{ width: "100%" }}>
      <Column maxWidth="m" fillWidth paddingBottom="128">
        <Row fillWidth s={{ direction: "column" }} horizontal="center" gap="48">
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
              style={{ y: avatarY }}
            >
              <Avatar src={person.avatar} size="xl" />
              <Row gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Row>
              {person.languages && person.languages.length > 0 && (
                <Row wrap gap="8">
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Row>
              )}
            </Column>
          )}

          <Column 
            className={styles.blockAlign} 
            flex={9} 
            maxWidth={40}
            as={motion.div}
            style={{ y: contentY }}
          >
            <Column
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
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
                    style={{
                      backdropFilter: "blur(var(--static-space-1))",
                    }}
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
                                  key={item.name}
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
                                  key={`${item.name}-icon`}
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

            {about.intro.display && (
              <RevealFx translateY="16" delay={0.2}>
                <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                  {about.intro.description}
                </Column>
              </RevealFx>
            )}

            {about.work.display && (
              <RevealFx translateY="16">
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                  {about.work.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.work.experiences.map((experience, index) => (
                    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                      <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (achievement: React.ReactNode, index: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${index}`}
                            >
                              {achievement}
                            </Text>
                          ),
                        )}
                      </Column>
                    </Column>
                  ))}
                </Column>
              </RevealFx>
            )}

            {about.studies.display && (
              <RevealFx translateY="16">
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                  {about.studies.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.studies.institutions.map((institution, index) => (
                    <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  ))}
                </Column>
              </RevealFx>
            )}

            {about.technical.display && (
              <RevealFx translateY="16">
                <Heading
                  as="h2"
                  variant="display-strong-s"
                  marginBottom="40"
                >
                  {about.technical.title}
                </Heading>
                <Column fillWidth gap="l">
                  {about.technical.skills.map((skill, index) => (
                    <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                      <Text id={skill.title} variant="heading-strong-l">
                        {skill.title}
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.tags && skill.tags.length > 0 && (
                        <Row wrap gap="8" paddingTop="8">
                          {skill.tags.map((tag, tagIndex) => (
                            <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                              {tag.name}
                            </Tag>
                          ))}
                        </Row>
                      )}
                    </Column>
                  ))}
                </Column>
              </RevealFx>
            )}
          </Column>
        </Row>
      </Column>
    </motion.div>
  );
};
