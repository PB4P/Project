"use strict";

function tabsChange() {
  var buttons = document.querySelectorAll('.contacts-info__tabs-menu-link');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var target = this.dataset.target;
      removeActive(buttons);
      setActive(this);
      setViewTab(target);
    });
  }
}

function setActive(buttonItem) {
  var parent = buttonItem.parentNode;
  parent.classList.add('contacts-info__tabs-menu-item_active');
}

function removeActive(buttons) {
  for (var i = 0; i < buttons.length; i++) {
    var parent = buttons[i].parentNode;
    parent.classList.remove('contacts-info__tabs-menu-item_active');
  }
}

function setViewTab(target) {
  var tabsElements = document.querySelectorAll('.contacts-info__tabs-content-item');
  var targetElement = document.querySelector(".contacts-info__tabs-content-item[data-target=\"".concat(target, "\"]"));

  for (var i = 0; i < tabsElements.length; i++) {
    tabsElements[i].classList.remove('contacts-info__tabs-content-item_active');
  }

  targetElement.classList.add('contacts-info__tabs-content-item_active');
}

$(document).ready(function() {
  tabsChange();
});

