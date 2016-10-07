'use strict'

const exec = require('child_process').execSync
const path = require('path')

switch (process.platform) {
  case 'win32':
    break
  case 'darwin':
    exec(`cd ${path.join(__dirname, 'mac')} && xcodebuild`, {
      encoding: 'utf8'
    })

    let outDir = path.join(__dirname, '..', 'app', 'dist')

    exec(`mkdir -p ${outDir} && mv ${path.join(__dirname, 'mac', 'build', 'Release', 'size')} ${path.join(outDir, 'size')} `, {
      encoding: 'utf8'
    })

    break
  case 'linux':
    break
}
