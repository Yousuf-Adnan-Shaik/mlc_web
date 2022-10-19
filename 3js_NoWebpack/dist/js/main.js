const canvas_section = document.querySelector(".canvas_section");
const main_section = document.querySelector('.main_page_section')

const explore_btn = document.querySelector(".explore_btn");
const aboutUs_cards = document.querySelectorAll(".card_blob");

explore_btn.addEventListener('click', function() {
    canvas_section.classList.toggle('section_hidden')
    main_section.classList.toggle('section_hidden')
    let animate_delay = 0;
    aboutUs_cards.forEach(card => {
        card.classList.add("fadeInTop_animation");
        // card.style.animationDelay = `.${animate_delay}s`;
        // animate_delay += 5;
    })

})

