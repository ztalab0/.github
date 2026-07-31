import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  // Set the base path to your repository name only when deployed on GitHub Pages
  basePath: isGithubActions ? "/ztalab0" : undefined,
  assetPrefix: isGithubActions ? "/ztalab0" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
