import { Job } from "../../../src/Workflow";
import { setupForNode } from "../../../src/Helpers";

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
