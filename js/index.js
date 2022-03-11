const containerFrame = document.querySelector('.content-container');
const navLink = document.querySelectorAll('.nav-link');
let contentFrame = document.querySelector('.content-frame');
let menuIcon = document.querySelectorAll('.menu-icon');
let menuSelect = document.querySelectorAll('.orders-menu');

// First load dom init
navLink.forEach((link) => {
  link.addEventListener('click', e => {
    let url = e.currentTarget.dataset.url;
    
    // Fetch data for new dom content
    fetch(`/data/${url}.html`)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        containerFrame.innerHTML = html
        // Reset dom values & add event listeners
        // Select listener type depending on page content
        if (url === 'orders' || url === 'rewards') {
          contentFrame = document.querySelector('.content-frame');
          menuSelect = document.querySelectorAll('.orders-menu');
          menuSelect.forEach((option) => {
            option.addEventListener('change', e => {
            let url = e.target.value;
  
              fetch(`/data/${url}.html`)
              .then((response) => {
                return response.text();
              })
              .then((html) => {
                contentFrame.innerHTML = html
              })
            })
          })
        } else {
          contentFrame = document.querySelector('.content-frame');
          menuIcon = document.querySelectorAll('.menu-icon');
          menuIcon.forEach((icon) => {
            icon.addEventListener('click', e => {
            let url = e.currentTarget.dataset.url;

              fetch(`/data/${url}.html`)
              .then((response) => {
                return response.text();
              })
              .then((html) => {
                contentFrame.innerHTML = html
              })
            })
          })
        }
      })
  })
});