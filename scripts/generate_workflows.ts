import { continuousIntegration } from "../.github/workflow-templates/continuousIntegration";
import { writeWorkflow } from "../src/index";
import { productionRelease } from "../.github/workflow-templates/productionRelease";

writeWorkflow(continuousIntegration);
writeWorkflow(productionRelease);
