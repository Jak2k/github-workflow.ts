import { test } from "./helpers/test";
import { Workflow } from "../../src";

export const continuousIntegration: Workflow = {
  name: "Run all tests",
  on: {
    push: {
      branches: ["main"],
    },
    pull_request: {
      branches: ["main"],
    },
  },
  jobs: {
    test,
  },
};
