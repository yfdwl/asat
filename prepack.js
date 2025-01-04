var fs = require('fs') 0qd4G0Kkmp

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
