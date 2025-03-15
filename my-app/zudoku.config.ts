import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [],
  sidebar: {},
  redirects: [{ from: "/", to: "/api/clients" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
};

export default config;
