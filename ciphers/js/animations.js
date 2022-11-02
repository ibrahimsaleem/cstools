function scrollTo(element) {
    window.scroll({
        top: element.getBoundingClientRect().top + window.scrollY,
        left: 0,
        behavior: 'smooth'
    });
  }
  document.getElementById("btn_top").addEventListener('click', () => {
    scrollTo(document.getElementById("content"));
  });