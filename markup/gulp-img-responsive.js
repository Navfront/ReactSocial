const gutil = require('gulp-util')
const through = require('through2')
const cheerio = require('cheerio')

// Опции плагина:

const defaultOptions = {
  maxMedias: [
    { imgPrefix: '-lg', resolution: 1200 },
    { imgPrefix: '-md', resolution: 1023 },
    { imgPrefix: '-sm', resolution: 575 }
  ],
  hasWebp: true
}

module.exports = options => {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file)
      return
    }
    if (file.isStream()) {
      cb(
        new gutil.PluginError('gulp-example-plugin', 'Streaming not supported')
      )
      return
    }

    const fileData = file.contents.toString()
    const $ = cheerio.load(fileData)
    const images = $('img')
    const opt =
      options?.maxMedias?.length || options?.hasWebp ? options : defaultOptions
    const { maxMedias = [], hasWebp = false } = opt
    images.each((index, element) => {
      const img = $(element)
      if (!img.attr('src').endsWith('.svg')) {
        const src = $(element).attr('src')
        img.wrap('<picture></picture>')

        maxMedias
          .sort((a, b) => a.resolution - b.resolution)
          .forEach(media => {
            let extension = '.jpg'
            if (hasWebp) {
              img.before(
                `<source media="(max-width: ${
                  media.resolution
                }px)" srcset="${src.replace(
                  /(.+)(\.jpg|\.png|\.jpeg)/gi,
                  (str, path) => {
                    return path + media.imgPrefix + '.webp'
                  }
                )}" type="image/webp">`
              )
            }
            img.before(
              `<source media="(max-width: ${
                media.resolution
              }px)" srcset="${src.replace(
                /(.+)(\.jpg|\.png|\.jpeg)/gi,
                (str, path, ext) => {
                  extension = ext
                  return path + media.imgPrefix + ext
                }
              )}" type="image/${extension.substring(1)}">`
            )
          })
        if (hasWebp) {
          img.before(
            `<source srcset="${src.replace(
              /(.+)(\.jpg|\.png|\.jpeg)/gi,
              (str, path) => {
                return path + '.webp'
              }
            )}" type="image/webp">
            `
          )
        }
      }
    })

    file.contents = Buffer.from($.html())
    this.push(file)
    cb()
  })
}
