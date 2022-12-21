# common-layer

Git submodule of shared files for Lambda functions. This is a Layer that will be attached to Lambda functions on runtime.

## Setup before updating the repository

1. Install packages

```
npm run install
```

or

```
yarn install
```

## Using Git Submodules

### Add Submodule to Your Project

```
git submodule add https://github.com/sample-org/common-layer
```

### Cloning a Project with a Submodule

```
git clone https://github.com/sample-org/main-project.git
git submodule init
git submodule update
```

or

```
git clone --recurse-submodules https://github.com/sample-org/main-project.git
```

or

```
git submodule update --init
```

or

```
git submodule update --init --recursive
```

### Other commands

```
git diff --cached --submodule
```

## Deploying Lambda layer

Build the layer.

```bash
sam build
```

Deploy the layer.

```bash
sam deploy
```

## Resources

-   [TypeScript](https://www.typescriptlang.org/)
-   [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
-   [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
-   [Jest](https://jestjs.io/docs/getting-started)
-   [Conventional Commits Cheat Sheet](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3)
-   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Lint Staged](https://github.com/okonet/lint-staged)
-   [Husky](https://typicode.github.io/husky/#/)
