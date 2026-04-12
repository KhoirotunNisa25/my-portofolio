"use client";

import { mailchimp, newsletter, social } from "@/resources";
import { useState } from "react";
import {
  Heading, Text, Background, Column, Row, IconButton, SmartLink,
} from "@once-ui-system/core";
import type { opacity, SpacingToken } from "@once-ui-system/core";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: "Phone",
      value: "+62 895620135270",
      href: "tel:+62895620135270",
      hoverBg: "#007AFF",
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
    <Column overflow="hidden" fillWidth padding="xl" radius="l" marginBottom="m"
      horizontal="center" align="center" background="surface" border="neutral-alpha-weak" {...flex}>
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
              Feel free to contact me through my phone or email. Or meet me offline in Malang!
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

            {/* Messaging buttons */}
            <Row gap="8" fillWidth>
              <SmartLink href="https://wa.me/62895620135270" style={{ flex: 1, textDecoration: "none" }}>
                <Column border="neutral-alpha-weak" radius="m" padding="m"
                  horizontal="center" align="center" gap="8" fillWidth
                  style={{ transition: "all 0.2s ease", background: hoveredCard === "whatsapp" ? "#25D366" : "var(--color-neutral-alpha-weak)", transform: hoveredCard === "whatsapp" ? "translateY(-4px)" : "translateY(0)" }}
                  onMouseEnter={() => setHoveredCard("whatsapp")}
                  onMouseLeave={() => setHoveredCard(null)}>
                  <Row gap="8" vertical="center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: hoveredCard === "whatsapp" ? "#ffffff" : "#25D366" }} aria-hidden="true" focusable="false">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    <Text variant="body-strong-s" style={{ color: hoveredCard === "whatsapp" ? "#ffffff" : "inherit" }}>WhatsApp</Text>
                  </Row>
                  <Text style={{ fontSize: "0.7rem", marginTop: "2px", color: hoveredCard === "whatsapp" ? "rgba(255,255,255,0.8)" : "var(--color-neutral-on-background-weak)" }}>Chat now</Text>
                </Column>
              </SmartLink>
              <SmartLink href="https://t.me/princenisa" style={{ flex: 1, textDecoration: "none" }}>
                <Column border="neutral-alpha-weak" radius="m" padding="m"
                  horizontal="center" align="center" gap="8" fillWidth
                  style={{ transition: "all 0.2s ease", background: hoveredCard === "telegram" ? "#2AABEE" : "var(--color-neutral-alpha-weak)", transform: hoveredCard === "telegram" ? "translateY(-4px)" : "translateY(0)" }}
                  onMouseEnter={() => setHoveredCard("telegram")}
                  onMouseLeave={() => setHoveredCard(null)}>
                  <Row gap="8" vertical="center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: hoveredCard === "telegram" ? "#ffffff" : "#2AABEE" }} aria-hidden="true" focusable="false">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.833.94z"/>
                    </svg>
                    <Text variant="body-strong-s" style={{ color: hoveredCard === "telegram" ? "#ffffff" : "inherit" }}>Telegram</Text>
                  </Row>
                  <Text style={{ fontSize: "0.7rem", marginTop: "2px", color: hoveredCard === "telegram" ? "rgba(255,255,255,0.8)" : "var(--color-neutral-on-background-weak)" }}>Send message</Text>
                </Column>
              </SmartLink>
            </Row>

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
                      <IconButton href={item.link} icon={item.icon} tooltip={item.name} size="m" variant="ghost" 
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