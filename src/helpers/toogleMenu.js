

/* document.addEventListener('DOMContentLoaded', () => {
    const burguerIcon = document.querySelector('.material-symbols-outlined');
    const burguerOpen = document.querySelector('.burguerOpen');
    const navLinks = document.querySelectorAll('.navLink');

      burguerIcon.addEventListener('click', () => {
        burguerOpen.classList.toggle('active');
      });



    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', () => {
          console.log('nen')
          burguerOpen.classList.toggle('active');
        });
      });
    }); */

    setTimeout(() => {
      const burguerIcon = document.querySelector('.material-symbols-outlined');
      const burguerOpen = document.querySelector('.burguerOpen');
      const navLinks = document.querySelectorAll('.navLink');
  
        burguerIcon.addEventListener('click', () => {
          burguerOpen.classList.toggle('active');
        });
  
  
  
      navLinks.forEach((navLink) => {
          navLink.addEventListener('click', () => {
            burguerOpen.classList.toggle('active');
          });
        });
    }, 2000);
    
    
    


