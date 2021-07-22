const  toggleBtn = document.querySelector('.toggle-btn');
const  nav_list = document.querySelector('.navbar-right');

function show_list(){
    nav_list.classList.toggle('active');
}
toggleBtn.addEventListener('click',show_list);