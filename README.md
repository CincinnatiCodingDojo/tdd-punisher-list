## Kroger React Seed

### Setup

```bash
git clone --depth 1 http://stash.kroger.com/scm/dcpce/kroger-component-seed.git ./<your-comp-dir-name>
cd <your-comp-dir-name>
git remote set-url origin <your-stash-repo-url>
make install
```

> `make install` is an alias for `sudo docker-compose run npm install`

### Setup w/ BFF

To see the component example working with the GraphQL BFF you need to have it running.

```bash
git clone --depth 1 http://stash.kroger.com/scm/dcpce/bff-seed.git ./<your-bff-dir-name>
cd <your-bff-dir-name>
sudo docker-compose build
sudo docker-compose up
```

### Start Dev Harness

Starting the harness will:

- Serve your component at [localhost:3000](http://localhost:3000)
- Run and watch your tests

```bash
make
```

> `make` is an alias for `sudo docker-compose up`

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

##### I changed my component code but it's not showing up

> Run `docker-compose down` and then `make` again

##### My docker-compose logs are gone, but `docker ps` reports it's still running

> Running `docker-compose logs` will reattach to the containers

##### How do I run arbitrary NPM commands in docker?

> Use `sudo docker-compose run npm ...` to run npm commands.

##### How shall I increment my component version?

> Just remember: **Breaking.Feature.FixOrChore**

##### I'm getting ERROR: Couldn't connect to Docker daemon - you might need to run `docker-machine start default` on a Mac.

> This is a known issue we haven't solved yet. For now, presuming you have node installed locally you can run
```
npm install
npm start
```

This will bring up the dev harness on http://localhost:3000
