function getHello () {
  var xhr = require('xhr')
  var newsData
  xhr.get('http://localhost:8000/extension', function (err, resp) {
    if (err) {
      console.log(err)
    }
    console.log(resp.body)
    newsData = JSON.parse(resp.body)
    console.log(newsData.articles[0])
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getHello)
})
