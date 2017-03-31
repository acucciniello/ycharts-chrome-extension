function tableCreate (newsData) {
  var tbl = document.getElementById('NewsTable')
  var tbdy = document.createElement('tbody')
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var td2 = document.createElement('td')
    td.appendChild(document.createTextNode(newsData.articles[i].title))
    td2.appendChild(document.createTextNode(newsData.articles[i].publishedAt))
    console.log(newsData.articles[i].publishedAt)
    tr.appendChild(td)
    tr.appendChild(td2)
    tbdy.appendChild(tr)
  }
  tbl.appendChild(tbdy)
  tbl.parentNode.replaceChild(tbdy, tbdy)
  tbl.innerHTML = tbdy.innerHTML
}

function getHello () {
  var xhr = require('xhr')
  var newsData
  xhr.get('http://localhost:8000/extension', function (err, resp) {
    if (err) {
      console.log(err)
    }
    newsData = JSON.parse(resp.body)
    tableCreate(newsData)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getHello)
})
