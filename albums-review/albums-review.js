const flecha = document.getElementById('flecha')

flecha.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor() 
    flecha.style.setProperty('--hover-color', randomColor)
    console.log(randomColor)
})

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}






const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  const star= document.querySelectorAll('.star');
  
  star.forEach((star) => {
    star.addEventListener('mouseover', () => {
      star.style.color = randomColor();
    });
    
    star.addEventListener('mouseout', () => {
      star.style.color = '';
    });
  });



const play = document.getElementById('play')

play.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor() 
    play.style.setProperty('--hover-color', randomColor)
    console.log(randomColor)
})

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}




const playCover = document.getElementById('button')

playCover.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor() 
    playCover.style.setProperty('--hover-color', randomColor)
    console.log(randomColor)
})

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}






const randomColorPlay = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  const playSong= document.querySelectorAll('.playSong');
  
  playSong.forEach((playSong) => {
    playSong.addEventListener('mouseover', () => {
      playSong.style.color = randomColorPlay();
    });
    
    playSong.addEventListener('mouseout', () => {
      playSong.style.color = '';
    });
  });