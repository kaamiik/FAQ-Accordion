const accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    // Remove active class when click on another container
    for (let j = 0; j < accordion.length; j++) {
      if (accordion[j] !== this) {
        accordion[j].classList.remove('active');
        // Change src to plus 
        accordion[j].querySelector('.plus-minus-icon').src = 'assets/images/icon-plus.svg';
      }
    }

    this.classList.toggle('active');
    
    const icon = this.querySelector('.plus-minus-icon');
    icon.src = (icon.src.endsWith('icon-minus.svg')) ? 'assets/images/icon-plus.svg' : 'assets/images/icon-minus.svg';
  });
}
