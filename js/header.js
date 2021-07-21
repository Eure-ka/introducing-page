const  toggleBtn = document.querySelector('.toggle_btn');
const  nav_list = document.querySelector('.navbar-right');

function show_list(){
    nav_list.classList.toggle('active');
}
toggleBtn.addEventListener('click',show_list);