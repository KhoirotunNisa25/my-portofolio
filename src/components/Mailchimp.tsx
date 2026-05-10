"use client";

import { mailchimp, newsletter, social } from "@/resources";
import { useState } from "react";
import {
  Heading, Text, Background, Column, Row, IconButton, SmartLink,
} from "@once-ui-system/core";
import type { opacity, SpacingToken } from "@once-ui-system/core";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ className, ...flex }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  if (newsletter.display === false) return null;

  const contactItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      label: "Email",
      value: "khoirotunnisa2507@gmail.com",
      href: "mailto:khoirotunnisa2507@gmail.com",
      hoverBg: "#EA4335",
      hoverText: "#ffffff",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Location",
      value: "Malang, Indonesia",
      hoverBg: "#FBBC05",
      hoverText: "#000000",
    },
  ];

  const filteredSocial = social.filter(s => s.name.toLowerCase() !== "email");

  const socialColors: Record<string, { bg: string; text: string }> = {
    github: { bg: "#333333", text: "#ffffff" },
    linkedin: { bg: "#0A66C2", text: "#ffffff" },
    instagram: { bg: "#E1306C", text: "#ffffff" },
    default: { bg: "#000000", text: "#ffffff" },
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      className={["mailchimp-card", className].filter(Boolean).join(" ")}
      {...flex}
    >
      <Background
        top="0" position="absolute"
        mask={{ x: mailchimp.effects.mask.x, y: mailchimp.effects.mask.y, radius: mailchimp.effects.mask.radius, cursor: mailchimp.effects.mask.cursor }}
        gradient={{ display: mailchimp.effects.gradient.display, opacity: mailchimp.effects.gradient.opacity as opacity, x: mailchimp.effects.gradient.x, y: mailchimp.effects.gradient.y, width: mailchimp.effects.gradient.width, height: mailchimp.effects.gradient.height, tilt: mailchimp.effects.gradient.tilt, colorStart: mailchimp.effects.gradient.colorStart, colorEnd: mailchimp.effects.gradient.colorEnd }}
        dots={{ display: mailchimp.effects.dots.display, opacity: mailchimp.effects.dots.opacity as opacity, size: mailchimp.effects.dots.size as SpacingToken, color: mailchimp.effects.dots.color }}
        grid={{ display: mailchimp.effects.grid.display, opacity: mailchimp.effects.grid.opacity as opacity, color: mailchimp.effects.grid.color, width: mailchimp.effects.grid.width, height: mailchimp.effects.grid.height }}
        lines={{ display: mailchimp.effects.lines.display, opacity: mailchimp.effects.lines.opacity as opacity, size: mailchimp.effects.lines.size as SpacingToken, thickness: mailchimp.effects.lines.thickness, angle: mailchimp.effects.lines.angle, color: mailchimp.effects.lines.color }}
      />

      <Column maxWidth="xl" fillWidth style={{ zIndex: 1 }}>
        <Heading marginBottom="s" variant="display-strong-xs" align="center">{newsletter.title}</Heading>
        <Text wrap="balance" marginBottom="xl" variant="body-default-l" onBackground="neutral-weak" align="center">
          {newsletter.description}
        </Text>

        {/* Two-column grid */}
        <Row fillWidth gap="16" wrap align="start">

          {/* LEFT — Contact Info */}
          <Column flex={1} minWidth={14} background="neutral-alpha-weak" border="neutral-alpha-medium" radius="l" padding="m" gap="8">
            <Text variant="body-strong-m" marginBottom="4">Reach out via</Text>
            <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
              Feel free to contact me by email or meet me offline in Malang!
            </Text>
            {contactItems.map((item) => (
              <Row key={item.label} border="neutral-alpha-weak" radius="m"
                padding="m" gap="16" vertical="center"
                 style={{ 
                   transition: "all 0.2s ease",
                   background: hoveredCard === item.label ? item.hoverBg : "var(--color-neutral-alpha-weak)",
                   color: hoveredCard === item.label ? item.hoverText : "inherit",
                   transform: hoveredCard === item.label ? "translateY(-4px)" : "translateY(0)"
                 }}
                 onMouseEnter={() => setHoveredCard(item.label)}
                 onMouseLeave={() => setHoveredCard(null)}>
                <Column
                  style={{ 
                    width: 44, height: 44, borderRadius: "12px", 
                    background: hoveredCard === item.label ? "rgba(255,255,255,0.2)" : "var(--color-neutral-alpha-medium)", 
                    border: "1px solid var(--color-neutral-alpha-strong)", 
                    flexShrink: 0, 
                    display: "flex", justifyContent: "center", alignItems: "center",
                    color: hoveredCard === item.label ? item.hoverText : "var(--color-neutral-on-background-strong)" 
                  }}>
                  {item.icon}
                </Column>
                <Column gap="2" style={{ display: "flex", justifyContent: "center" }}>
                  <Text variant="label-default-xs" style={{ color: hoveredCard === item.label ? "rgba(255, 255, 255, 0.8)" : "var(--color-neutral-on-background-weak)" }}>{item.label}</Text>
                  {item.href ? (
                    <SmartLink href={item.href} style={{ textDecoration: "none" }}>
                      <Text variant="body-strong-s" style={{ color: hoveredCard === item.label ? item.hoverText : "var(--color-neutral-on-background-strong)" }}>{item.value}</Text>
                    </SmartLink>
                  ) : (
                    <Text variant="body-strong-s" style={{ color: hoveredCard === item.label ? item.hoverText : "var(--color-neutral-on-background-strong)" }}>{item.value}</Text>
                  )}
                </Column>
              </Row>
            ))}
          </Column>

          {/* RIGHT — Social & Messaging */}
          <Column flex={1} minWidth={14} background="neutral-alpha-weak" border="neutral-alpha-medium" radius="l" padding="m" gap="12">

            {/* Quick Messages */}
            <Column border="neutral-alpha-weak" radius="m" padding="m"
              horizontal="center" align="center" gap="8"
              style={{ background: "var(--color-neutral-alpha-weak)" }}>
              <Column
                style={{ width: 64, height: 64, borderRadius: "20px", background: "var(--color-accent-alpha-weak)", color: "var(--color-accent-strong, inherit)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  <path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>
                </svg>
              </Column>
              <Text variant="body-strong-m">Fast Response</Text>
              <Text variant="body-default-s" style={{ color: "var(--color-neutral-on-background-weak)" }} align="center">
                Need a quick reply? Let's connect instantly via messaging apps!
              </Text>
            </Column>

            {/* Divider */}
            <Row fillWidth vertical="center" gap="12" marginTop="8">
              <Column style={{ flex: 1, height: 1, background: "var(--color-neutral-alpha-medium)" }} />
              <Text variant="label-default-xs" onBackground="neutral-weak">Follow on social</Text>
              <Column style={{ flex: 1, height: 1, background: "var(--color-neutral-alpha-medium)" }} />
            </Row>

            {/* Social icons */}
            <Row gap="8" fillWidth>
              {filteredSocial.map((item) => {
                const colors = socialColors[item.name.toLowerCase()] || socialColors.default;
                return item.link && (
                  <SmartLink key={item.name} href={item.link} style={{ flex: 1, textDecoration: "none" }}>
                    <Column border="neutral-alpha-weak" fillWidth
                      radius="m" padding="m" horizontal="center" align="center" gap="4"
                      style={{ transition: "all 0.2s ease", height: "100%", background: hoveredCard === item.name ? colors.bg : "var(--color-neutral-alpha-weak)", transform: hoveredCard === item.name ? "translateY(-4px)" : "translateY(0)" }}
                      onMouseEnter={() => setHoveredCard(item.name)}
                      onMouseLeave={() => setHoveredCard(null)}>
                      <IconButton icon={item.icon} tooltip={item.name} size="m" variant="ghost" 
                        style={{ color: hoveredCard === item.name ? colors.text : "inherit", background: "transparent" }} />
                      <Text variant="label-default-xs" style={{ color: hoveredCard === item.name ? "rgba(255,255,255,0.8)" : "var(--color-neutral-on-background-weak)" }}>
                        {item.name}
                      </Text>
                    </Column>
                  </SmartLink>
                );
              })}
            </Row>
          </Column>

        </Row>
      </Column>
    </Column>
  );
};