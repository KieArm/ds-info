const containerFrame = document.querySelector('.content-container');
const navLink = document.querySelectorAll('.nav-link');
let contentFrame = document.querySelector('.content-frame');
let menuIcon = document.querySelectorAll('.menu-icon');

navLink.forEach((link) => {
  link.addEventListener('click', e => {
    let url = e.currentTarget.dataset.url;
    
    // Fetch page data
    fetch(`${url}.html`)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        containerFrame.innerHTML = html
        // Reset values & add event listener
        contentFrame = document.querySelector('.content-frame');
        menuIcon = document.querySelectorAll('.menu-icon');
        menuIcon.forEach((icon) => {
          icon.addEventListener('click', e => {
            let url = e.currentTarget.dataset.url;
          
            fetch(`${url}.html`)
              .then((response) => {
                return response.text();
              })
              .then((html) => {
                contentFrame.innerHTML = html
              })
          })
        })
      })
  })
});