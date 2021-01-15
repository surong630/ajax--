const request = new XMLHttpRequest();
let n =1;

  getNext.onclick = () => {
    if(n === 3) {
      alert('没有下一页了')
      return false
    }
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
      if(request.readyState === 4) {
        if(request.status >= 200 &&request.status < 300) {
          const array = JSON.parse(request.response)
          array.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.id
            xxx.appendChild(li)
          });
          n = n +1;
        }
      }
    } 
    request.send()
  }
getXML.onclick = () => {
  request.open('GET', './4.xml')
  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >=200 && request.status <300) {
        const xml = request.responseXML
        const text = xml.getElementsByTagName('name')[0];
        console.log(text.textContent);
      }
    }
  }
  request.send()
}
getHtml.onclick = () => {
  request.open('GET', './3.html')
  request.onload = () => {
    const html = document.createElement('div')
    html.innerHTML = request.response;

    document.body.appendChild(html)
  }
  request.onerror = () => {

  }
  request.send()
}
js.onclick = () => {
  request.open('GET', './2.js')
  request.onload = () => {
    const js = document.createElement('script');
    js.innerHTML = request.response
    document.body.appendChild(js)
  }
  request.onerror = () => {
    console.log('失败了');
  }
  request.send()
}
getCSS.onclick = () => {
  request.open('GET', './style.css')
  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        console.log(request.status);
        const style = document.createElement('style')
        style.innerHTML = request.response;
        document.head.appendChild(style)
      } else {
        alert('失败了')
      }
    }
  }
  request.send()
}
getJson.onclick = () => {
  request.open('GET', './5.json');
  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response)
        wel.textContent = object.name
      }
    }
  }
  request.send()
}