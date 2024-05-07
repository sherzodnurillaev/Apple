
const mid = document.querySelector('.midBut')
let pho = document.querySelector('.pho')
let but = document.querySelector('.imgBut')
let per_o = document.querySelector('.per_one')
let per_t = document.querySelector('.per_two')

let white = document.querySelector('.white')
let black = document.querySelector('.black')
let blue = document.querySelector('.blue')
let gold = document.querySelector('.gold')

mid.onclick = () => {
    if (pho.getAttribute('src') === './images/home/img_1.webp') {
        pho.setAttribute('src', './images/home/img_2.webp')
        mid.setAttribute('class', 'midBut_')
        but.setAttribute('src', './images/logo/arrow_left.png')
        per_o.setAttribute('class', 'per_one_')
        per_t.setAttribute('class', 'per_two_')
        
    } else {
        pho.setAttribute('src', './images/home/img_1.webp')
        mid.setAttribute('class', 'midBut')
        but.setAttribute('src', './images/logo/arrow.png')
        per_o.setAttribute('class', 'per_one')
        per_t.setAttribute('class', 'per_two')
    }
}

white.onclick = () => {
    pho.setAttribute('src', './images/home/img_1.webp')
    // pho.setAttribute('src', './images/home/white.webp')
    if (pho.getAttribute('src') === './images/home/img_1.webp') {
        pho.setAttribute('src', './images/home/white.webp')
    } else {
        pho.setAttribute('src', './images/home/img_1.webp')
    }
}
black.onclick = () => {
    pho.setAttribute('src', './images/home/img_1.webp')
    // pho.setAttribute('src', './images/home/white.webp')
    if (pho.getAttribute('src') === './images/home/img_1.webp') {
        pho.setAttribute('src', './images/home/black.jpeg')
    } else {
        pho.setAttribute('src', './images/home/img_1.webp')
    }
}
blue.onclick = () => {
    pho.setAttribute('src', './images/home/img_1.webp')
    // pho.setAttribute('src', './images/home/white.webp')
    if (pho.getAttribute('src') === './images/home/img_1.webp') {
        pho.setAttribute('src', './images/home/blue.png')
    } else {
        pho.setAttribute('src', './images/home/img_1.webp')
    }
}
gold.onclick = () => {
    pho.setAttribute('src', './images/home/img_1.webp')
    // pho.setAttribute('src', './images/home/white.webp')
    if (pho.getAttribute('src') === './images/home/img_1.webp') {
        pho.setAttribute('src', './images/home/gold.png')
    } else {
        pho.setAttribute('src', './images/home/img_1.webp')
    }
}

// 976151485