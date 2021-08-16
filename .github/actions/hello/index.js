//file that will run
const core = require('@actions/core');
const github = require('@actions/github');

try {
   // throw ( new Error ("some error msg"));
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);
    
    const time = new Date();
    core.setOutput("Time", time.toTimeString());
    
    console.log(JSON.stringify(github, null, '\t'));
    
} catch (error) {
    core.setFailed(error.message)
}




