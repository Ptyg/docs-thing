import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/docs-thing",
  topNavigation: [
    { id: "about", label: "About" },
    { id: "authorization", label: "Authorization" },
    { id: "installation", label: "Installation" },
    { id: "api", label: "API" },
  ],
  sidebar: {},
  redirects: [{ from: "/", to: "/api/clients" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
