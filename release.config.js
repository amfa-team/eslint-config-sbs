module.exports = {
  branches: [
    "master",
    { name: "develop", prerelease: "beta" },
  ],
  repositoryUrl: "https://github.com/amfa-team/sbs-service-template.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
