"use client";

import dynamic from "next/dynamic";
import { DynamicCloudProps } from "@/components/blocks/interactive-icon-cloud";

// Load IconCloud only on client-side to avoid hydration mismatch
const IconCloud = dynamic<DynamicCloudProps>(
  () => import("@/components/blocks/interactive-icon-cloud").then((mod) => mod.IconCloud),
  {
    ssr: false,
    loading: () => (
      <div className="flex size-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    ),
  }
);

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "openjdk",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonwebservices",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudShow() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-14 pb-14 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
