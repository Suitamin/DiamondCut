const test = document.querySelector('.image-slider')
const arrLeft = document.querySelector('.prev')
const arrRight = document.querySelector('.next')
const heading = document.querySelector('.caption h1')
const desc = document.querySelector('.caption p')

const imgs = [
    "showroom-1.jpeg", "showroom-2.jpg", "showroom-3.jpg"
]

const headings = [
    "Visit Our Showroom", "Venture Into The Experience", "Check Our Latest Cars"
]

const descs = [
    "Find Your Dream Car",
    "Explore Wide Range of Cars in Our Showroom",
    "Check Out Our Latest Car Additions",
]

let id = 0;

function slide(id) {
    test.style.backgroundImage = `url(asset/${imgs[id]})`;

    test.classList.add('image-fade');

    setTimeout(() => {
        test.classList.remove('image-fade');
    }, 550);

    heading.innerText = headings[id];

    desc.innerText = descs[id];
}

arrLeft.addEventListener('click', () => {
    id--;

    if (id < 0) {
        id = imgs.length - 1;
    }

    slide(id);
});

arrRight.addEventListener('click', () => {
    id++;

    if (id > imgs.length - 1) {
        id = 0;
    }

    slide(id);
});