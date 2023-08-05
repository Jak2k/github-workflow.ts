import { Job } from "../../../src/Workflow.js";
import { setupForNode } from "../../../src/Helpers.js";

export const test: Job = {
  name: "Run tests",
  "runs-on": "ubuntu-latest",
  steps: [
    ...setupForNode({
      nodeVersion: "20",
      usePnpm: true,
    }),
    {
      name: "Run tests",
      run: "pnpm run test",
    },
  ],
};
