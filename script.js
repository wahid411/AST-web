let letters = document.querySelectorAll('.reveal-text span');

let counter = 0;

let revealSection = document.querySelector('.reveal-section');

window.addEventListener('scroll', () => {

    let sectionTop = revealSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {

        if (counter < letters.length) {
            letters[counter].classList.add('show');
            counter++;
        }

    }

});

    const projectItems = document.querySelectorAll(".project-item");
const projectImages = document.querySelectorAll(".project-img");

projectItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        const imageIndex = item.dataset.image;

        projectImages.forEach((image) => {
            image.classList.remove("active");
        });

        projectImages[imageIndex].classList.add("active");

    });

});