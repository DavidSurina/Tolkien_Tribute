const counters = {
    first: 1,
    second: 2,
    third: 3,
}

const leftArrow = document.querySelector(".js-left_arrow");
const rightArrow = document.querySelector(".js-right_arrow");

const imageOne = document.querySelector(".js-first_slide");
const imageTwo = document.querySelector(".js-second_slide");
const imageThree = document.querySelector(".js-third_slide");
const preview = document.querySelector(".js-slideshow_preview");

function eventHandler(e) {
    if(e.target.classList.contains("js-right_arrow") & counters.first < 5 & counters.second < 6 & counters.third < 7) {
        counters.first++;
        counters.second++;
        counters.third++;
        renderImage();
        console.log(counters);
        if(counters.first > 0) {
            imageOne.style.removeProperty("display");
            leftArrow.style.removeProperty("display");
        }
        if(counters.third > 6) {
            imageThree.style.display = "none";
            rightArrow.style.display = "none";
        }
    } 
    else if(e.target.classList.contains("js-left_arrow") & counters.first > 0 & counters.second > 1 & counters.third > 2) {
        counters.first--;
        counters.second--;
        counters.third--;
        renderImage();
        console.log(counters);
        if(counters.first < 1) {
            imageOne.style.display = "none";
            leftArrow.style.display = "none";
        }
        if(counters.third < 7) {
            imageThree.style.removeProperty("display");
            rightArrow.style.removeProperty("display");
        }
    }
}

function renderImage() {
    imageOne.setAttribute('src', 'resources/img/lotr'+ counters.first +'.jpg');
    imageTwo.setAttribute('src', 'resources/img/lotr'+ counters.second +'.jpg');
    imageThree.setAttribute('src', 'resources/img/lotr'+ counters.third +'.jpg');
    preview.setAttribute('src', 'resources/img/lotr'+ counters.second +'.jpg');
    preview.setAttribute('onClick', "window.open('resources/img/lotr" + counters.second + ".jpg')")
}

leftArrow.addEventListener('click', eventHandler);   
rightArrow.addEventListener('click', eventHandler); 
