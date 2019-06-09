const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');



function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

//Select tab content item
function selectItem(e) {
  //add border to current tab
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  //Grab content item from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //console.log(this);
  //add the show class
  //console.log(tabContentItem);
  //console.log(tabContentItem.className);
  //console.log(tabContentItem.classList);
  tabContentItem.classList.add('show');
  //console.log(tabContentItem.className);
  //console.log(this);
}

//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));