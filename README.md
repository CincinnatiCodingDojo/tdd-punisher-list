## Kroger React Seed

### Environment Setup

- Node v5.10+ and npm v3.8+ (check with `node -v` and `npm -v`). If you are behind on the version, run the following commands:
```bash
sudo npm i -g n
sudo n latest
```
> Be sure to exit the terminal and open a new one.
  
- docker-compose v1.6+ (check with `docker-compose -v`). If you are behind on the version, run the following commands:
```bash
sudo -i
curl -L https://github.com/docker/compose/releases/download/1.7.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +rx /usr/local/bin/docker-compose
exit
```
> Be sure to exit the terminal and open a new one.
 
### Seed Setup

```bash
git clone http://stash.kroger.com/scm/dcpce/kroger-component-seed.git ~/projects/<your-comp-dir-name>
cd ~/projects/<your-comp-dir-name>
git remote set-url origin <your-stash-repo-url>
npm install
```

### BFF Setup

The BFF seed is a different project, but this seed was designed to work with the Store Locator example endpoint in the BFF seed.

To see the component example working with the GraphQL BFF you'll need to clone it and have it running as well.

```bash
git clone http://stash.kroger.com/scm/dcpce/bff-seed.git ~/projects/<your-bff-dir-name>
cd ~/projects/<your-bff-dir-name>
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
npm run test:watch
```

### Getting Data

You have two options for getting data into your project. The first is the `api-stub` that ships with this project. In the file `apistub.js` you can mock any responses that you expect from your BFF. A very simple implementation could be:

```js
{
    path: '/cart/show',
    data: {
      products: [
        one: { upc: 'ABC', price: 2.99 },
        two: { upc: 'DEF', price: 0.99 }
      ]
    }
  },
```

The api stub is already setup to run in docker locally. Just run `docker-compose up` using the existing `docker-compose.yml` and your data will be available at `localhost:3002/cart/show`. For more advanced instructions on mocking your endpoint data, see the [README](http://stash.kroger.com/projects/DCPCE/repos/api-stub/browse/README.md) of the api-stub project.

The other option for getting data is to actually run your BFF application. If you don't currently have a BFF you can clone the [BFF Seed Project](http://stash.kroger.com/projects/DCPCE/repos/bff-seed/browse) and run `docker-compose up`.

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

### Features

Dumb Component (`src/components`):
- KUIC - Kroger UI Components
- CSS
- [Functional stateless pattern](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)
- Component testing with enzyme

Smart/Connected Component (`src/containers`):
- [Connects](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) dumb component to redux store

Redux:
- Actions (`src/actions`) with tests
- Reducers (`src/reducers`) with tests

Testing:
- Mocha, Chai, Sinon
- See test/README.md for more details

Serve with Webpack:
- Live Reload

Other:
- eslint and editorconfig
- fully commented code

### FAQ

##### Docker commands are failing

> Try `sudo` before your command.

##### How shalt thy increment thus component version?

> Thou shalt remember thy version mantra: **Breaking.Feature.FixOrChore**
