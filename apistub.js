var API = require('./src/api');

var setting = [
  {
    path: '/superfast',
    data: {
      fast: true
    }
  },
  {
    path: '/superslow',
    data: {
      fast: false
    },
    delay: {
      min: 2000,
      max: 2000
    }
  },
  {
    path: '/slow',
    data: {
      fast: false
    },
    delay: {
      min: 250,
      max: 500
    }
  }];

var apiserver = new API(setting);
apiserver.start(3002, function () {
  console.log(apiserver.profile.call(this));
});
