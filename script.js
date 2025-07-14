const mobilePanel = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.hamburger-closed');
const closeBtn = document.querySelector('.hamburger-opened');

openBtn.addEventListener('click', () => {
    mobilePanel.classList.add('active');
    openBtn.classList.remove('active');
    closeBtn.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    mobilePanel.classList.remove('active');
    openBtn.classList.add('active');
    closeBtn.classList.remove('active');
})

photoBtn.addEventListener('click', () => {
  photoBtn.classList.add('active');
  videosection.classList.add('closed');
  videoBtn.classList.remove('active');
  photosection.classList.remove('closed');
})

videoBtn.addEventListener('click', () => {
  videoBtn.classList.add('active');
  photosection.classList.add('closed');
  photoBtn.classList.remove('active');
  videosection.classList.remove('closed');
})