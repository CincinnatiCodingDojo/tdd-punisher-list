## Kroger React Seed

### Setup

```bash
git clone http://stash.kroger.com/scm/dcpce/kroger-component-seed.git <your-comp-dir-name>
cd <your-comp-dir-name>
git remote set-url origin <your-stash-repo-url>
npm install
```

### Setup w/ BFF

To see the component example working with the GraphQL BFF you need to also clone it and have it running.

```bash
git clone http://stash.kroger.com/scm/dcpce/bff-seed.git <your-bff-dir-name>
cd <your-bff-dir-name>
docker-compose build
docker-compose up
```

### Start Dev Server

Starting the server will:

- Serve your component at [localhost:3000](http://localhost:3000)

```bash
npm start
```

### Run Tests

```bash
npm test
npm test -- --watch
```

### Publishing Your Component to [npm.kroger.com](http://npm.kroger.com)

1. Update the following fields in your `package.json`
> It is recommended to start your component at version 1.0.0
```json
{
  "name": "my-component",
  "version": "1.0.0",
  "description": "Cool awesome thing that my component does!"
  ...
  // Don't edit anything else at this time
}
```

1. Check that you are using npm.kroger.com as your npm registry
> `npm get registry` should return http://npm.kroger.com/. If it's not
then run `npm set registry http://npm.kroger.com`

1. Run adduser to login to npm
> `npm adduser` and follow the prompts

1. Publish your component
> `npm publish`

1. When you make any changes, increment your package.json version.
>Follow the guideline: **Breaking.Feature.FixOrChore** when considering
your new version number. Then publish again.

### FAQ

##### Docker commands are failing

> Try `sudo` before your command.

##### How shalt thy increment thus component version?

> Thou shalt remember thy version mantra: **Breaking.Feature.FixOrChore**
