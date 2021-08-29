'use strict';

document
  .querySelector('.tabbed__tab-container')
  .addEventListener('click', function (e) {
    const clicked = e.target.closest('.tabbed__tab');

    if (!clicked) return;

    const targetTab = clicked.dataset.tab;

    [...this.children].forEach((btn) => {
      if (btn !== clicked) {
        document
          .querySelector(`.tabbed__content--${btn.dataset.tab}`)
          .classList.remove('tabbed__content--active');

        btn.classList.remove('tabbed__tab--active');
      }
    });

    clicked.classList.add('tabbed__tab--active');
    document
      .querySelector(`.tabbed__content--${targetTab}`)
      .classList.add('tabbed__content--active');
  });
