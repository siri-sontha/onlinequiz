// Sri Krishna

// Menu and Close Fucntionality

let menu = document.querySelector('.menu');
let navSec = document.querySelector('.navSec');
let close = document.querySelector('.close');

menu.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function openNav(){
        navSec.style.display = 'flex';
        document.body.style.overflow = 'hidden';
}

function closeNav(){
    navSec.style.display = 'none';
    document.body.style.overflow = 'initial';
}

// Menu and Close Fucntionality


// Search Functionality

let searchDiv = document.querySelector('.searchDiv');
let searchToggle = document.querySelector('.searchToggle');

searchToggle.addEventListener('click', openSearch);

function openSearch() {
    if (searchDiv.style.display === 'none') 
    {
        searchDiv.style.display = 'block';
        searchToggle.style.display = 'none';
    } 
    else {
        searchDiv.style.display = 'none';
    }
}

// Search Functionality


// Screen Toggle Functionality

let screenToggle = document.querySelector('#screenToggle');
let circle = document.querySelector('#circle');
let bodyElement = document.querySelector('body');

screenToggle.addEventListener('click', bgcolor);

function bgcolor() {
  const bodyStyles = getComputedStyle(bodyElement);
  const currentBgColor = bodyStyles.getPropertyValue('--dot-bg').trim();


  if (currentBgColor === 'black') {
    bodyElement.style.setProperty('--dot-bg', '#8e55c7');
    navSec.style.setProperty('--dot-bg', '#8e55c7');
    circle.style.left = '1.8rem';
  } 
  else {
    bodyElement.style.setProperty('--dot-bg', 'black');
    navSec.style.setProperty('--dot-bg', 'black');
    circle.style.left = '';
  }
}

// Screen Toggle Functionality

// Sri Krishna