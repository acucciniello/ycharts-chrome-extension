function getHello () {
  var xhr  = require('xhr')
  xhr.get('http://localhost:8000/extension', function(err, resp) {
    console.log(resp.body)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getHello)
})
