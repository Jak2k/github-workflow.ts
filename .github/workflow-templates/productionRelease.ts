import { test } from "./helpers/test.js";
import { NPM_PUBLISH } from "./helpers/Versions.js";
import { setupForNode } from "../../src/Helpers.js";
import { Workflow } from "../../src";

export const productionRelease: Workflow = {
  name: "Release to NPM",
  on: {
    push: {
      tags: ["v*"],
    },
  },
  jobs: {
    test,
    publish: {
      name: "Release to NPM registry",
      needs: test,
      "runs-on": "ubuntu-latest",
      steps: [
        ...setupForNode({
          nodeVersion: "20",
          usePnpm: true,
        }),
        {
          name: "Publish to NPM",
          uses: NPM_PUBLISH,
          with: {
            token: "${{ secrets.NPM_TOKEN }}",
            registry: "https://registry.npmjs.org/",
          },
        },
        {
          name: "Publish to GitHub",
          uses: NPM_PUBLISH,
          with: {
            token: "${{ secrets.GITHUB_TOKEN }}",
            registry: "https://npm.pkg.github.com",
          },
        },
      ],
    },
  },
};
