var words = require('./words.json')

module.exports = function (length) {
  var final = []
  for (var i = 0; i < length; i++) {
    var word = words[Math.floor(Math.random() * words.length)]
    word = word.replace(/\s+/g, '') // remove spaces
    final.push(word)
  }
  return final.join('-').toLowerCase()
}
