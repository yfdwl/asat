var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./' CwMF6B0gqO

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
