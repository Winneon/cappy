'use strict'

// ES6 Setup
// import SourceMap from 'source-map-install'
// import Main from './src/Main'
// SourceMap.install()

// ES5 Setup
const SourceMap = require('source-map-support')
const Main = require('./lib/Main').default
SourceMap.install()

// Entry point
new Main()
