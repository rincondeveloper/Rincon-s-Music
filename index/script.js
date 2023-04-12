ScrollReveal().reveal('.header');
ScrollReveal().reveal('.hero__h1');
ScrollReveal().reveal('.flecha');
ScrollReveal().reveal('.item');
ScrollReveal().reveal('.like');
// SLIDES BONITOS


// HEADER  HEADER  HEADER  HEADER HEADER  HEADER  HEADER  HEADER
// HEADER  HEADER  HEADER  HEADER HEADER  HEADER  HEADER  HEADER
// HEADER  HEADER  HEADER  HEADER HEADER  HEADER  HEADER  HEADER


// direccionmenu
// direccionmenu     ALBUMS
// direccionmenu
const menuAlbums = document.getElementById('menu-albums')

menuAlbums.addEventListener('click', function(event) {
    event.preventDefault()
    
    const albums = document.getElementById('albums')
    albums.scrollIntoView({behavior: 'smooth'})
})

// direccionmenu
// direccionmenu     LIKE
// direccionmenu
const menuLike = document.getElementById('menu-like')

menuLike.addEventListener('click', function(event) {
    event.preventDefault()
    
    const iLike = document.getElementById('like')
    iLike.scrollIntoView({behavior: 'smooth'})
})

// direccionmenu
// direccionmenu   MUSIC
// direccionmenu
// const menuContact = document.getElementById('menu-contact')

// menuContact.addEventListener('click', function(event) {
//     event.preventDefault()
    
//     const footer = document.getElementById('footer')
//     footer.scrollIntoView({behavior: 'smooth'})
// })

// direccionmenu
// direccionmenu   CONTACT
// direccionmenu
const menuContact = document.getElementById('menu-contact')

menuContact.addEventListener('click', function(event) {
    event.preventDefault()
    
    const footer = document.getElementById('footer')
    footer.scrollIntoView({behavior: 'smooth'})
})



// HERO  HERO  HERO  HERO HERO  HERO  HERO  HERO
// HERO  HERO  HERO  HERO HERO  HERO  HERO  HERO
// HERO  HERO  HERO  HERO HERO  HERO  HERO  HERO


// DIRECCION FLECHA
// DIRECCION FLECHA  DIRECCION DE LA FLECHA
// DIRECCION FLECHA
const flechaslide = document.getElementById('flecha')

flechaslide.addEventListener('click', function(event) {
    event.preventDefault()

    albums.scrollIntoView({behavior: 'smooth'})
}) 

// colorflecha
// colorflecha     COLOR DE LA FLECHA
// colorflecha
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

// color
// color      COLOR DELSPAN DEL HERO 1111111
// color
const span = document.getElementById('span')

span.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor() 
    span.style.setProperty('--hover-color', randomColor)
})

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}

// 2color
// 2color        COLOR DELSPAN DEL HERO 22222222
// 2color
const span2 = document.getElementById('span2')

span2.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor() 
    span2.style.setProperty('--hover-color', randomColor)
})

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}


// ALBUMS LINK REVIEW  ALBUMS LINK REVIEW  ALBUMS LINK REVIEW  
// ALBUMS LINK REVIEW  ALBUMS LINK REVIEW  ALBUMS LINK REVIEW  
// ALBUMS LINK REVIEW  ALBUMS LINK REVIEW  ALBUMS LINK REVIEW  


// COLOR REVIEWS
// COLOR REVIEWS   COLOR DEL LINK PARA IR AL REVIEW DEL ALBUMS
// COLOR REVIEWS

const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
  
const as= document.querySelectorAll('.nameReviewA');
  
as.forEach((as) => {
    as.addEventListener('mouseover', () => {
      as.style.color = randomColor();
    });
    
    as.addEventListener('mouseout', () => {
      as.style.color = '';
    });
});
