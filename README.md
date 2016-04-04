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

### FAQ

##### I changed my component code but it's not showing up

> Run `docker-compose down` and then `make` again

##### My docker-compose logs are gone, but `docker ps` reports it's still running

> Running `docker-compose logs` will reattach to the containers

##### How do I run arbitrary NPM commands in docker?

> Use `sudo docker-compose run npm ...` to run npm commands.

##### How shall I increment my component version?

> Just remember: **Breaking.Feature.FixOrChore**