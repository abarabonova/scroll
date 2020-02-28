let numberOfRects = 7

for (let i = 0; i < numberOfRects; i +=1) {
  let div = document.createElement('div')

  if (anime.random(0,100) % 2 === 0) {
    let size = `${anime.random(0,500)}px`
    div.style.width = size
    div.style.height = size
    div.style.borderRadius = '100%'
  } else {
    div.style.width = `${anime.random(0,500)}px`
    div.style.height = `${anime.random(0,500)}px`
  }
  div.style.background = div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,100)},${anime.random(0,10)})`
  div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

  div.onmouseenter = function (e) {
    let elStyle = e.target.style
    console.log(e.target.style.width.slice(0, -2));
    if (elStyle.width === elStyle.height) {
      console.log('circle');
    }
  elStyle.background =  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,100)},${anime.random(0,25)})`
  elStyle.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
  }
  document.body.append(div)
}


// let word = Math.random().tostring(36).slice(-10)
// div.onmouseenter = function () {
//   document.write
//
// }





//
