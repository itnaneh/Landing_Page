'use strict';

const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

// navbar variables
const navBar = document.querySelector('.navbar-nav');
// navbar toggle function 
const navbarToggle = () => navBar.classList.toggle('active');

//added toggle function on navbar buttons 
hamburger.addEventListener('click',navbarToggle);
closeBtn.addEventListener('click',navbarToggle);