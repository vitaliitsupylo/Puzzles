;(()=>{
'use strict';
/*Variables*/

/*active list category search*/
let btnListSearch = document.querySelector('.category_search');
let activeCatSearch = document.querySelector('.active_category_search');
let listCatSearch = document.querySelector('.list_category_search');
let btnCategoryList = document.querySelector('.categories_list');




/*active list category search*/
btnListSearch.addEventListener('click',()=>{
  btnListSearch.classList.toggle('active');
});
listCatSearch.addEventListener('click',(el)=>{
  if(el.target.nodeName === "LI"){
    activeCatSearch.innerText = el.target.innerText;
  }
})

/*activecategory list */
btnCategoryList.addEventListener('click',()=>{
  btnCategoryList.classList.toggle('active');
});

})();
