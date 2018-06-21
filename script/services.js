let $product1 = $(".miniTitle1");
let $text1 = $(".subject1");
let $product2 = $(".miniTitle2");
let $text2 = $(".subject2");
let $product3 = $(".miniTitle3");
let $text3 = $(".subject3");
let $product4 = $(".miniTitle4");
let $text4 = $(".subject4");
let $product5 = $(".miniTitle5");
let $text5 = $(".subject5");
let $product6 = $(".miniTitle6");
let $text6 = $(".subject6");
let $product7 = $(".miniTitle7");
let $text7 = $(".subject7");
let $product8 = $(".miniTitle8");
let $text8 = $(".subject8");

$product1.on("click", function (e) {
  $text1.toggleClass("read");
  $product1.toggleClass("");
  $product2.toggleClass("notSee");
  $product3.toggleClass("notSee");
  $product4.toggleClass("notSee");
  $product5.toggleClass("notSee");
  $product6.toggleClass("notSee");
  $product7.toggleClass("notSee");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product2.on("click", function (e) {
  $text2.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("");
  $product3.toggleClass("notSee");
  $product4.toggleClass("notSee");
  $product5.toggleClass("notSee");
  $product6.toggleClass("notSee");
  $product7.toggleClass("notSee");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product3.on("click", function (e) {
  $text3.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("notSee");
  $product3.toggleClass("");
  $product4.toggleClass("notSee");
  $product5.toggleClass("notSee");
  $product6.toggleClass("notSee");
  $product7.toggleClass("notSee");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product4.on("click", function (e) {
  $text4.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("notSee");
  $product3.toggleClass("notSee");
  $product4.toggleClass("");
  $product5.toggleClass("notSee");
  $product6.toggleClass("notSee");
  $product7.toggleClass("notSee");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product5.on("click", function (e) {
  $text5.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("notSee");
  $product3.toggleClass("notSee");
  $product4.toggleClass("notSee");
  $product5.toggleClass("");
  $product6.toggleClass("notSee");
  $product7.toggleClass("notSee");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product6.on("click", function (e) {
  $text6.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("notSee");
  $product3.toggleClass("notSee");
  $product4.toggleClass("notSee");
  $product5.toggleClass("notSee");
  $product6.toggleClass("");
  $product7.toggleClass("notSee");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product7.on("click", function (e) {
  $text7.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("notSee");
  $product3.toggleClass("notSee");
  $product4.toggleClass("notSee");
  $product5.toggleClass("notSee");
  $product6.toggleClass("notSee");
  $product7.toggleClass("");
  $product8.toggleClass("notSee");
  $("#presentationOne").toggleClass("change");
});
$product8.on("click", function (e) {
  $text8.toggleClass("read");
  $product1.toggleClass("notSee");
  $product2.toggleClass("notSee");
  $product3.toggleClass("notSee");
  $product4.toggleClass("notSee");
  $product5.toggleClass("notSee");
  $product6.toggleClass("notSee");
  $product7.toggleClass("notSee");
  $product8.toggleClass("");
  $("#presentationOne").toggleClass("change");
});

//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function () {
  var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);

  skipClickDelay = function (e) {
    e.preventDefault();
    e.target.click();
  }

  setAriaAttr = function (el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function (el1, el2, expanded) {
    switch (expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function (e) {
    console.log("triggered");
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();