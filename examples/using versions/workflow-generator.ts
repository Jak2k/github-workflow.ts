import * as versions from "./Versions";
import { Job, Step, Workflow } from "@wardellbagby/gh-workflow-gen";

export type VersionedJob = Job<typeof versions>;
export type VersionedStep = Step<typeof versions>;
export type VersionedWorkflow = Workflow<typeof versions>;
