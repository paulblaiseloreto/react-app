const { plugins } = require("./build/release.config");

module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/paulblaiseloreto/react-app",
  plugins: [
    "@semantic-release/commit-anlayzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
