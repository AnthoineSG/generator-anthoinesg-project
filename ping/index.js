import Generator from "yeoman-generator";

export default class extends Generator {
  initializing() {
    this.log("⚙️  ~ initializing method ~ WELCOME !!!!!");
  }

  async prompting() {
    this.log("🤔 ~ Some questions for you");

    // ! Infos supplémentaire pour les prompt => https://github.com/SBoudrias/Inquirer.js && .\node_modules\yeoman-generator\dist\util\prompt-suggestion.js
    this.questionnaire = await this.prompt([
      {
        type: "confirm",
        name: "start",
        message: "Do you want to start the Yeoman test ?",
      },
      {
        type: "confirm",
        name: "check",
        message: "Are you sure ?",
      },
      {
        type: "checkbox",
        name: "checkbox",
        message: "Select the color of nothing :",
        choices: [
          {
            name: "Red",
            value: "red",
          },
          {
            name: "Green",
            value: "green",
          },
          {
            name: "Blue",
            value: "blue",
          },
        ],
      },
      {
        type: "list",
        name: "framework",
        message: "Select your favorite framework :",
        choices: [
          {
            name: "NextJs",
            value: "nextjs",
          },
          {
            name: "Vite",
            value: "vite",
          },
          {
            name: "Without framework",
            value: "vanilla",
          },
        ],
      },
    ]);

    this.log("👌 ~ End of questionnaire");
  }

  random() {
    this.log("🚀 ~ random method just ran");
  }

  _neverCall() {
    this.log("🚀 ~ _neverCall method just ran");
  }

  installingLodash() {
    this.log("🚀 ~ installingLodash start");

    // this.npmInstall(["lodash"], { "save-dev": true });

    this.log("🚀 ~ installingLodash finish");
  }

  paths() {
    this.log("🚀 ~ path - start");

    // this.log("🚀 ~ path - destinationRoot", this.destinationRoot());
    // * => C:\Users\...\_test1

    // this.log(
    //   "🚀 ~ path - destinationPath('index.js')",
    //   this.destinationPath("index.js")
    // );
    // * => C:\Users\...\_test1\index.js

    // this.log("🚀 ~ path - this.sourceRoot()", this.sourceRoot());
    // * => C:\Users\...\generator-anthoinesg-project\app\templates

    // this.log(
    //   // "🚀 ~ path - this.templatePath('index.js')",
    //   this.templatePath("index.js")
    // );
    // * => C:\Users\...\generator-anthoinesg-project\app\templates\index.js

    // // ? Copy all files
    // this.fs.copyTpl(
    //   this.templatePath(this.sourceRoot()),
    //   this.destinationPath(this.destinationRoot()),
    //   null, // Required
    //   null, // Required
    //   { globOptions: { dot: true } }
    // );

    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath("index.ts")
    );

    this.log("🚀 ~ path - end");
  }

  writingDependencies() {
    if (!this.questionnaire.start || !this.questionnaire.check) {
      this.log("❌ ~ writingDependencies cancel");
      return;
    }

    this.log("🚀 ~ writingDependencies - start");

    const pkgJson = {
      dependencies: {
        vue: "*",
        react: "*",
      },
    };

    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);

    this.log("🚀 ~ writingDependencies - end");
  }

  install() {
    if (!this.questionnaire.start || !this.questionnaire.check) {
      this.log("❌ ~ install cancel");
      return;
    }

    this.log("🚀 ~ install dependencies - start");

    this.spawnSync("npm", ["install"]);

    this.log("🚀 ~ install dependencies - end");
  }

  end() {
    this.log("🔚 ~ end of custom method ~ Salut mon pote 👋 !");
  }
}
