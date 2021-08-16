//file that will run
const core = require("@actions/core");
const github = require("@actions/github");

try {
  //throw ( new Error ("some error msg"));

  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("Time", time.toTimeString());

  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
