module.exports = {
  branches: ["master", { name: "develop", prerelease: "beta" }],
  repositoryUrl: "https://github.com/amfa-team/eslint-config-sbs.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
