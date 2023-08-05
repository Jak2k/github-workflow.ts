import { Workflow, convertToYaml } from "../../dist";
import path from "path";
import fs from "fs";
import { assertEquals, directory } from "../test_helpers";
import * as Versions from "./Verions";

export const testWorkflowWithVersions = () => {
  const workflow: Workflow<typeof Versions> = {
    name: "Versioned Workflow",
    on: {
      push: {},
    },
    jobs: {
      echo: {
        name: "Check the deps!",
        "runs-on": "ubuntu-latest",
        steps: [
          {
            name: "Using a dependency!!",
            uses: Versions.SOME_THING,
          },
        ],
      },
    },
  };

  const actual = convertToYaml(workflow);

  const expected = fs
    .readFileSync(
      path.resolve(directory(import.meta.url), "versioned-expected.yml")
    )
    .toString();

  assertEquals(actual, expected);
};
