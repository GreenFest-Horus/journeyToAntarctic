const menuButtons = document.querySelectorAll('[data-menu-button]');
const menuParent = document.querySelector('[data-menu]');

const toggleMenu = () => {
  menuParent.classList.toggle('active');
  document.body.classList.toggle('scroll-lock');
};

const onOverlayClick = (event) => {
  if (event.target.closest('[data-menu]')) {
    return;
  }

  document.body.removeEventListener('click', onOverlayClick, true);
  toggleMenu();
};

const onMenuToggle = () => {
  if (menuParent.classList.contains('active')) {
    document.body.removeEventListener('click', onOverlayClick, true);
    toggleMenu();

    return;
  }

  document.body.addEventListener('click', onOverlayClick, true);
  toggleMenu();
};

const initMenu = () => {
  menuButtons.forEach((button) => button.addEventListener('click', onMenuToggle));
};

export {initMenu};
