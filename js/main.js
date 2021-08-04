const  toggleBtn = document.querySelector('.toggle-btn');
const  nav_list = document.querySelector('.navbar-right');
const home_btn = document.querySelector('.nav-title');
const backToTop = document.getElementById('backtotop');
const go_aboutme = document.querySelector('.AmBtn');
const go_skills = document.querySelector('.SkBtn');
const go_works = document.querySelector('.wkBtn');
const moreBtn = document.querySelector('.more_btn');


function show_list(){
    nav_list.classList.toggle('active');
}

function checkScroll() {
    /*
      웹페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 반환)
      https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
    */
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

}

function moveBackToTop() {
    if (window.pageYOffset > 0) {
        /*
        smooth 하게 스크롤하기
        https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
        */
       window.scrollTo({top: 0, behavior: "smooth"})
    }
}

function moveAboutme(){
    document.querySelector('.about-me').scrollIntoView();
}

function moveSkills(){
    document.querySelector('.skills .inner').scrollIntoView();
}

function moveWorks(){
    document.querySelector('.works').scrollIntoView();
}

toggleBtn.addEventListener('click',show_list);
window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);
home_btn.addEventListener('click',moveBackToTop);
go_aboutme.addEventListener('click',moveAboutme);
go_skills.addEventListener('click',moveSkills);
go_works.addEventListener('click',moveWorks);
moreBtn.addEventListener('click',moveAboutme);
