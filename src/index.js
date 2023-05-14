import './styles/styles.css';
import { debounce, content } from './utils';

const progressThumb = document.querySelector('.section__scroll__scrollbar_block_scroll-thumb');
const footerNumber = document.querySelector('.section__content__info__footer_number');
const startNumber = document.querySelector('.section__scroll__scrollbar_block__count-start');
const titleText = document.querySelector('.section__content__info__middle_title');
const describeText = document.querySelector('.section__content__info__middle_describe');
const section = document.querySelector('.section');
const scrollBtn = document.querySelector('.section__scroll__image');

let activeIndexElement = 0;

window.addEventListener('wheel', debounce(onWheel, 1000));
scrollBtn.addEventListener('click', (e) => {
    onWheel(null);
})

function onWheel(e) {
    let isScrollDown = true;
    if(e){
        if(e.target.className === 'describe_item' && e.target.parentElement.scrollHeight > e.target.parentElement.clientHeight){
            return;
        };
            const delta = e.deltaY || e.detail || e.wheelDelta;
            isScrollDown = delta > 0;
    }


    if(isScrollDown){
        if(activeIndexElement >= content.length -1) return;
        activeIndexElement++;
    } else {
        if(activeIndexElement <= 0) return;
        activeIndexElement--;
    }

    progressThumb.style.transform = `translateY(${100 * activeIndexElement}%)`; 

    setPageNumber(footerNumber, activeIndexElement + 1);
    setPageNumber(startNumber, activeIndexElement + 1);

    titleText.innerHTML = content[activeIndexElement].title;
    const description = content[activeIndexElement].description.reduce((acc, current) => {
        return acc+=`<p class="describe_item">${current}</p>`;
    }, "");
    describeText.innerHTML = description;

}

function setPageNumber(node, activeIndex) {
    node.innerHTML = `0${activeIndex}`;
}






