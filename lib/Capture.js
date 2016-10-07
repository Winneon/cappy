/* global URL */

'use strict'

import { desktopCapturer, remote } from 'electron'
import { execSync as exec } from 'child_process'
import path from 'path'

class Capture {
  screen () {
    desktopCapturer.getSources({
      types: [ 'window' ]
    }, (error, sources) => {
      if (error) throw error

      for (let source of sources) {
        let id = source.id.substring(source.id.indexOf(':') + 1)

        let dimensions = exec(`${path.join(remote.app.getAppPath(), 'dist', 'size')} ${id}`, {
          encoding: 'utf8'
        }).split('&')

        let width = dimensions[0]
        let height = dimensions[1]

        navigator.webkitGetUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: source.id,
              minWidth: width,
              minHeight: height,
              maxWidth: width,
              maxHeight: height
            }
          }
        }, (stream) => {
          let video = document.createElement('video')

          video.addEventListener('loadeddata', (event) => {
            console.log(video.videoWidth)
            console.log(video.videoHeight)

            let canvas = document.createElement('canvas')

            canvas.setAttribute('width', video.videoWidth)
            canvas.setAttribute('height', video.videoHeight)

            let context = canvas.getContext('2d')
            context.drawImage(video, 0, 0)

            let dataURL = canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '')
            let buf = new Buffer(dataURL, 'base64')

            require('fs').writeFileSync('image' + id + '.png', buf)
          })

          video.src = URL.createObjectURL(stream)
        }, (error) => {
          if (error) throw error
        })
      }
    })
  }
}

export default Capture
