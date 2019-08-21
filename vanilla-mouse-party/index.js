const mousePosition = {x:0, y:0}
const drawId = []
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min
  };
  window.addEventListener('mousemove', function(mouseMoveEvent){
      mousePosition.x = mouseMoveEvent.pageX
      mousePosition.y = mouseMoveEvent.pageY
  })
  function draw (){
      return setInterval(function (){
        let contatiner = document.getElementById('wrap')
        const color = `background:rgb(${getRandomNumber(
            0,
            255
          )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`
          const ballSize = getRandomNumber(10, 30);
          const size = `height:${ballSize}px; width:${ballSize}px;`
          const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
          )}px;`;
          const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
          )}px; `;
          const style = `${left}${top}${color}${size}`
        
          let ball = document.createElement('div')
             ball.classList.add('ball')
             ball.style = style
          

        ball.addEventListener('animationend', function(mouseMoveEvent){
            mouseMoveEvent.target.remove()
        })
        contatiner.appendChild(ball)
      }, 100) }

    window.addEventListener('mouseover', function(){
        drawId = draw() 
    })
    window.addEventListener('mouseout', function(){
        clearInterval(drawId)
    })
  
  
  
