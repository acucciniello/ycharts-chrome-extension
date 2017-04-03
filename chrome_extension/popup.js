// Creates a table with one column that shows the titles
// of newest articles with Urls embedded
function tableCreate (newsData) {
  var tbl = document.getElementById('NewsTable')
  var tbdy = document.createElement('tbody')
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var link = document.createElement('a')
    link.setAttribute('href', newsData.articles[i].url)
    link.setAttribute('target', '_blank')
    link.appendChild(document.createTextNode(newsData.articles[i].title))
    td.appendChild(link)
    tr.appendChild(td)
    tbdy.appendChild(tr)
  }
  tbl.appendChild(tbdy)
  tbl.parentNode.replaceChild(tbdy, tbdy)
  tbl.innerHTML = tbdy.innerHTML
}

// Sends GET to server to pull news data from news API
// Uses 'xhr'
// Sends news data to tableCreate
function getNews () {
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

// Calls getNews() on button click
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getNews)
})

