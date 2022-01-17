const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

module.exports = (on) => {
    on("file:preprocessor", cypressTypeScriptPreprocessor);
};
const fs = require("fs-extra");
const path = require("path");
const autoRecord = require("cypress-autorecord/plugin");

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve("..", "config", `${file}.json`);

    return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
    require("cypress-mochawesome-reporter/plugin")(on);

    on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium" && browser.name != "electron") {
            // in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
            // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

            // open devtools by default:
            launchOptions.args.push("--auto-open-devtools-for-tabs");
            launchOptions.args.push(
                "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,aasite-per-process"
            );

            return launchOptions;
        }

        if (browser.family === "firefox") {
            // open devtools by default:
            launchOptions.args.push("-devtools");

            return launchOptions;
        }

        if (browser.name === "electron") {
            // open devtools by default:
            launchOptions.preferences.devTools = true;

            return launchOptions;
        }
    });

    const configFile = config.env.configFile;
    const configFilePath = path.resolve(
        __dirname,
        "../config",
        `${configFile}.json`
    );
    const rawConfigFile = fs.readFileSync(configFilePath);
    const customConfig = JSON.parse(rawConfigFile);

    return customConfig;
};

require("@applitools/eyes-cypress")(module);
