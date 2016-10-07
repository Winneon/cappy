'use strict'

import { desktopCapturer } from 'electron'

class Capture {
  screen () {
    desktopCapturer.getSources({
      types: [ 'window' ]
    }, (error, sources) => {
      if (error) throw error

      for (let source of sources) {
        console.log(source.id)
        /* navigator.webkitGetUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: source.id
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

            require('fs').writeFileSync('image.png', buf)
          })

          video.src = URL.createObjectURL(stream)
        }, (error) => {
          if (error) throw error
        }) */
      }
    })
  }
}

export default Capture
