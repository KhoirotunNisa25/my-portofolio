import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Mailchimp, HomeSection } from "@/components";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const projects = getPosts(["src", "app", "work", "projects"]);
  return (
    <Column maxWidth="m" paddingY="12" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Home Hero Section */}
      <HomeSection />

      {/* About Section (Parallax via useScroll & useTransform inside component) */}
      <AboutSection />

      {/* Work Section (Parallax via useScroll & useTransform inside component) */}
      <WorkSection posts={projects} />

      {/* Footer / Mailchimp */}
      <RevealFx translateY="16">
        <Mailchimp />
      </RevealFx>
    </Column>
  );
}
