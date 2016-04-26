import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiCheerio from 'chai-cheerio';
import chaiImmutable from 'chai-immutable';

chai.use(sinonChai);
chai.use(chaiCheerio);
chai.use(chaiImmutable);
chai.should();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
