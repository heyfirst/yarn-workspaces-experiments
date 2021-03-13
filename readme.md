## Yarn Workspaces Experiment

### How it (yarn workspaces) works?

It helps to managing internal dependencies.

You can read more in this link [Yarn Workspaces](https://yarnpkg.com/features/workspaces)

### How monorepo works?

read this one ["Why you should use a single repository for all your company’s projects"](https://www.drmaciver.com/2016/10/why-you-should-use-a-single-repository-for-all-your-companys-projects/) 

### How to publish package to github package

Before all, you need to have our personal GitHub token ([generate here](https://github.com/settings/tokens)) and select the package permission.

When you get the token, you need to login your npm Github registry via

```bash
$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

Then you can publish your package!

We can define `package.json` in the package that you want to publish like this

```json {7,8,9,10}
{
  "name": "@heyfirst/plus",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "author": "Kanisorn Sutham <kanisorns.k@gmail.com>",
  "repository": "git@github.com:heyfirst/yarn-workspaces-experiments.git",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/heyfirst"
  }
}
```

and then you can run the command `npm publish` to push your package to the cloud.

You can read more about `package.json` file in [Package.json document](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) 