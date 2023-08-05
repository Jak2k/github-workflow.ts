import { Step } from "./Workflow";

export function setupForNode({
  usePnpm,
  nodeVersion,
}: {
  usePnpm: boolean;
  nodeVersion: "20" | "18";
}): Step[] {
  const nodeSetup: Step[] = usePnpm
    ? [
        {
          name: "Setup Pnpm",
          uses: "pnpm/action-setup@v2",
        },
        {
          name: "Setup Node",
          uses: "actions/setup-node@v3",
          with: {
            "node-version": nodeVersion,
          },
        },
      ]
    : [
        {
          name: "Setup Node",
          uses: "actions/setup-node@v3",
          with: {
            "node-version": nodeVersion,
          },
        },
      ];

  return [
    {
      name: "Checkout",
      uses: "actions/checkout@v3.5.3",
    },
    ...nodeSetup,
    {
      name: "Install Dependencies",
      run: usePnpm ? "pnpm install" : "npm ci",
    },
  ];
}
