import { SSTConfig } from "sst";
import {API} from "./stacks/Mystack";

export default {
  config(_input) {
    return {
      name: "linkedin-scrapper-app",
      region: "eu-west-3",
      stage: process.env.SST_STAGE || "dev",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "python3.9",
      copyFiles: [{ from: "functions", to: "." }],
    });
    app.stack(API, {
      id: "api-stack",
    });
  }
} satisfies SSTConfig ;