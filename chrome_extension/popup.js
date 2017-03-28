function getHello () {
  var xhr = new window.XMLHttpRequest()
  xhr.open('GET', 'http://localhost:8000/extension', true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  xhr.onload = function() {
    console.log('it was sent')
  }
  xhr.send()
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', getHello)
})
