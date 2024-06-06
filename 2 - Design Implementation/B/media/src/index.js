const sidebarButton = document.querySelector('#sidebar-button');

const secondNavItems = document.querySelectorAll('.second-nav-item');

sidebarButton.addEventListener('click', () => {
  secondNavItems.forEach(navItem => {
    navItem.style.display = 'flex';
  });
});