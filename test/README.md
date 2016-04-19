#### Folder Purpose

This folder does **not** contain actual spec files. It only contains spec configuration files for mocha and chai. Spec files can be found living next to the file they are testing.

#### Mocha Setup:

- We set up babel as a compiler so we can write our tests in ES2015
- We require:
  - ignore-styles: this is so css imports don't throw errors in tests
  - chai.opts.js: This sets up the chai options, see below section.
  - babel-polyfill: So we can use features like async/await, Promises, etc.
- BDD ui option
- Spec reporter: this gives us a nice output but primarily this writes console logs to the command line

#### Chai Setup:

Chai is set up to use the `should` syntax. You can also use the `expect` syntax, but you must import it at the top of the spec file. 

- **should** syntax
```js
foo.should.be.true;
```
- **expect** syntax
```js
import { expect } from 'chai';
expect(foo).to.be.true;
```

Chai is set up with the following plugins to aid testing development:

- **sinon-chai**: fluent testing of sinon spies and mocks.
```js
someSpy.should.have.been.called;
```
- **sinon-cheerio**: fluent testing of rendered component strings to validate html structures.
```js
const wrapper = render(<Component loading={true}/>);
wrapper.should.have.descendants('.StoreLocator-loading');
```
- **sinon-immutable**: fluent testing of immutablejs objects.
```js
// if 'store' were to return an immutablejs Map
store.getState().get('store').should.have.keys('foo', 'bar');
```

