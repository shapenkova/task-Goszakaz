(function() {
    "use strict";

    //навигационное меню
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
        root.classList.toggle("show-nav");
    });

    // const elem1 = $('.page-header__nav--heart');
    // const elem2 = $('.page-header__nav--basket');
    // const elem3 = $('.page-header__nav--user');
 
    // function handleClick(element) {
    //    element.on('click', function() {
    //       if (element) {
    //          element.css('fill', '#1066d0');
    //          element.css('color', '#1066d0');
    //       } else {
    //          element.css('fill', 'transparent');
    //          element.css('color', '#111');
    //       }
    //    });
    // }
 
    // handleClick(elem1);
    // handleClick(elem2);
    // handleClick(elem3);
 
    // function addClickHandler (selector, url) {
    //    $(selector).on('click', function() {
    //       window.location.href = url;
    //    });
    // }
 
    // addClickHandler('.page-header__catalog', 'catalog.html');
    // addClickHandler('.breadcrumbs__btn', 'index.html')
 
}) ();