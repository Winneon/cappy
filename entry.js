'use strict'

require('source-map-support').install()

// ES6
// import Main from './src/Main'
// new Main()

// ES5
const Main = require('./lib/Main').default
new Main()
