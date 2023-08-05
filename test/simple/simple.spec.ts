import { Workflow, convertToYaml } from "../../dist";
import path from "path";
import fs from "fs";
import { assertEquals, directory } from "../test_helpers";

export const testSimpleWorkflow = () => {
  const workflow: Workflow = {
    name: "Simple Workflow",
    on: {
      push: {},
    },
    permissions: {
      actions: "read",
    },
    env: {
      ENV_FIELD: "1",
    },
    jobs: {
      echo: {
        name: "Echo",
        "runs-on": "macos-latest",
        steps: [
          {
            name: "Echoing!",
            run: 'echo "Hello World!"',
          },
        ],
      },
    },
  };

  const actual = convertToYaml(workflow);

  const expected = fs
    .readFileSync(
      path.resolve(directory(import.meta.url), "simple-expected.yml")
    )
    .toString();

  assertEquals(actual, expected);
};
