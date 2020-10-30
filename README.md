# eslint-config-sbs

This package provides Side By Side .eslintrc as an extensible shared config.

## Installation

- Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-sbs@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-sbs
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-sbs@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-sbs

Our default export contains all of our ESLint rules, including ECMAScript 6+, FlowJS and React.

It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`,
`eslint-plugin-jsx-a11y`, `eslint-config-prettier` `eslint-plugin-compat` and
`eslint-plugin-eslint-comments`. If you don't need React, see `eslint-config-sbs/base`.

- Add `"extends": "sbs"` to your .eslintrc.

For browser compatibility settings see https://github.com/amilajack/eslint-plugin-compat#3-configure-target-browsers

**With Typescript:**

Install `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` and `typescript`

```json
{
  "extends": ["sbs", "sbs/typescript"],
  "parserOptions": {
    "project": ["./tsconfig.json", "./packages/*/tsconfig.json"]
  }
}
```

### eslint-config-sbs/base

Our default export contains all of our ESLint rules, including ECMAScript 6+ and FlowJS.

It requires `eslint`, `eslint-config-prettier` and `eslint-plugin-import`.

- Add `"extends": "sbs/base"` to your .eslintrc

**With Typescript:**

Install `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` and `typescript`

```json
{
  "extends": ["sbs/base", "sbs/typescript"],
  "parserOptions": {
    "project": ["./tsconfig.json", "./packages/*/tsconfig.json"]
  }
}
```

### eslint-config-sbs/script

Same as `sbs/base` but it allows require statements

It requires `eslint`, `eslint-config-prettier` and `eslint-plugin-import`.

- Add `"extends": "sbs/script"` to your .eslintrc
