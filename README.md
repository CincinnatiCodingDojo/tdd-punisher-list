## Kroger React Seed

### Setup

```bash
git clone --depth 1 http://stash.kroger.com/scm/dcpce/kroger-component-seed.git ./<your-comp-dir-name>
cd <your-comp-dir-name>
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

- Serve your component at [localhost:3000](localhost:3000)
- Run and watch your tests

```bash
make
```

> `make` is an alias for `sudo docker-compose up` 

### Run Arbitrary NPM commands

Use `sudo docker-compose run npm ...` to run npm commands.
