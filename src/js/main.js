;
(() => {
    'use strict';
    /*Variables*/

    /*active list category search*/
    const btnListSearch = document.querySelector('.category_search');
    const activeCatSearch = document.querySelector('.active_category_search');
    const listCatSearch = document.querySelector('.list_category_search');
    const btnCategoryList = document.querySelector('.categories_list');
    /*search hover*/
    const searchInput = document.querySelector('.search_input');
    /*user reviews*/
    const reviewsCard = document.querySelectorAll('.user_reviews_card');


    /*active list category search*/
    btnListSearch.addEventListener('click', () => {
        btnListSearch.classList.toggle('active');
    });
    listCatSearch.addEventListener('click', (el) => {
        if (el.target.nodeName === "LI") {
            activeCatSearch.innerText = el.target.innerText;
        }
    })

    /*active category list */
    btnCategoryList.addEventListener('click', () => {
        btnCategoryList.classList.toggle('active');
    });

    /*search hover*/
    searchInput.addEventListener('input', function () {
        this.parentElement.classList.add('focus');
    });
    searchInput.addEventListener('blur', function () {
        if (this.value.length < 1) {
            this.parentElement.classList.remove('focus');
        }
    });
    /*user reviews*/
    if (reviewsCard.length > 0) {
        for (let i = 0; i < reviewsCard.length; i++) {
            let btn = reviewsCard[i].querySelector('.collapse');
            btn.addEventListener('click', function () {
                this.parentElement.classList.toggle('active');
            })
        }
    }


})();
