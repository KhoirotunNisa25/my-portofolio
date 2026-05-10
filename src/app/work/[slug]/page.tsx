import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  Column,
  Heading,
  Media,
  Text,
  Row,
  Line,
  Button,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, ScrollToTop, CustomMDX, BackButton } from "@/components";
import type { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back button */}
      <Row fillWidth paddingTop="8">
        <BackButton />
      </Row>

      {/* Title block */}
      <Column maxWidth="s" gap="12" horizontal="center" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          align="center"
        >
          {post.metadata.summary}
        </Text>
      </Column>

      {/* Role & Tech badges */}
      {(post.metadata.role || post.metadata.tech) && (
        <Row gap="24" horizontal="center" wrap>
          {post.metadata.role && (
            <Row gap="8" vertical="center">
              <Text variant="label-strong-s" onBackground="neutral-weak">Role</Text>
              <Text variant="label-default-s">{post.metadata.role}</Text>
            </Row>
          )}
          {post.metadata.tech && (
            <Row gap="8" vertical="center">
              <Text variant="label-strong-s" onBackground="neutral-weak">Tech</Text>
              <Text variant="label-default-s">{post.metadata.tech}</Text>
            </Row>
          )}
        </Row>
      )}

      {/* External links */}
      {(post.metadata.github || post.metadata.figma || post.metadata.website) && (
        <Row gap="16" horizontal="center" wrap>
          {post.metadata.github && (
            <Button href={post.metadata.github} variant="secondary" size="s" suffixIcon="arrowUpRightFromSquare">
              GitHub
            </Button>
          )}
          {post.metadata.figma && (
            <Button href={post.metadata.figma} variant="secondary" size="s" suffixIcon="arrowUpRightFromSquare">
              Figma
            </Button>
          )}
          {post.metadata.website && (
            <Button href={post.metadata.website} variant="secondary" size="s" suffixIcon="arrowUpRightFromSquare">
              Live Website
            </Button>
          )}
        </Row>
      )}

      {/* Cover image */}
      {post.metadata.images.length > 0 && (
        <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images[0]} />
      )}

      {/* MDX content */}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>

      {/* Related projects */}
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Other Projects
        </Heading>
        <Projects exclude={[post.slug]} range={[1, 4]} posts={getPosts(["src", "app", "work", "projects"])} />
      </Column>

      <ScrollToHash />
      <ScrollToTop />
    </Column>
  );
}

