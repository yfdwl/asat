var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync( 6GsZ4ydwNQ
  __dirname + '/package.json'
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
