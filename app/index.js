import Generator from "yeoman-generator";

import { framework, packageByFramework } from "./constants.js";

export default class extends Generator {
  initializing() {
    this.log("⚙️  ~ initializing of custom method !");
  }

  async prompting() {
    this.log("🤔 ~ Some questions for you");

    this.questionnaire = await this.prompt([
      {
        type: "list",
        name: "framework",
        message: "Select your favorite framework :",
        choices: [
          {
            name: "NextJs",
            value: framework.nextJs,
          },
          {
            name: "Vite",
            value: framework.vite,
          },
          {
            name: "Without framework",
            value: framework.vanilla,
          },
        ],
      },
    ]);

    this.log("👌 ~ End of questionnaire");
  }

  start() {
    this.log("🏁 ~ start of custom method !");
  }

  _copyTemplatesFile(framework) {
    this.fs.copyTpl(
      this.templatePath(framework),
      this.destinationPath(this.destinationRoot()),
      null, // Required
      null, // Required
      { globOptions: { dot: true } }
    );
  }

  paths() {
    this.log("🚀 ~ path - start");

    if (this.questionnaire.framework) {
      this._copyTemplatesFile(this.questionnaire.framework);
    }

    this.log("🚀 ~ path - end");
  }

  writingDependencies() {
    this.log("🚀 ~ writingDependencies - start");

    this.fs.extendJSON(
      this.destinationPath("package.json"),
      packageByFramework[this.questionnaire.framework]
    );

    this.log("🚀 ~ writingDependencies - end");
  }

  install() {
    this.log("🚀 ~ install dependencies - start");

    this.spawnSync("pnpm", ["install"]);

    this.log("🚀 ~ install dependencies - end");
  }

  end() {
    this.log("🔚 ~ end of custom method !");
  }
}
