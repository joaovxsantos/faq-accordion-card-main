const arrow = document.querySelectorAll('[name="chevron-down-outline"]');
const card = document.querySelectorAll('.card');
const title = document.querySelectorAll('.title');
const names = ['chevron-down-outline', 'chevron-up-outline'];

arrow.forEach((element, index) => {
    element.addEventListener('click', () => {
        card[index].children[1].classList.toggle('on');

        if (card[index].children[1].classList[1] === 'on') {
            element.name = 'chevron-up-outline';
            title[index].style = 'font-weight:700';
        } else {
            element.name = 'chevron-down-outline';
            title[index].style = 'font-weight:300';
        }
    })
})