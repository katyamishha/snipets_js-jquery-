// acitem - класс подменю ul
//main-menu-outer - класс основного меню ul

jQuery.fn.initMenu = function() {
 return this.each(function(){
 var theMenu = $(this).get(0);
 $('.acitem', this).hide();
 $('.result.expand > .acitem', this).show();
 $('.result.expand > .acitem', this).prev().prev().addClass('active');
 $('.result span', this).click(
 function(e) {
    e.stopImmediatePropagation();
    var theElement = $(this).next().next();
    var parent = this.parentNode.parentNode;
 if($(parent).hasClass('result')) {
 if(theElement[0] === undefined) {
 window.location.href = this.href;
 }
 $(theElement).slideToggle('normal', function() {
 if ($(this).is(':visible')) {
 $(this).prev().addClass('active');
 }
 else {
 $(this).prev().removeClass('active');
 }
 });
 return false;
 }
 else {
 if(theElement.hasClass('acitem') && theElement.is(':visible')) {
 if($(parent).hasClass('collapsible')) {
 $('.acitem:visible', parent).first().slideUp('normal',
 function() {
 $(this).prev().prev().removeClass('active');
 }
 );
 return false;
 }
 return false;
 }
 if(theElement.hasClass('acitem') && !theElement.is(':visible')) {
 $('.acitem:visible', parent).first().slideUp('normal', function() {

 $(this).prev().prev().removeClass('active');

 });
 theElement.slideDown('normal', function() {
 $(this).prev().prev().addClass('active');
 });
 return false;
}
}
}
);
});
};
$(document).ready(function() {$('.main-menu-outer').initMenu();});

$(function() {
    var pull_slider = $('#pull_slider');
        menu_slider = $('aside>ul');
        menuSliderHeight = menu_slider.height();
    $(pull_slider).on('click', function(e) {
        e.preventDefault();
        menu_slider.slideToggle();
    });
});
	$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu_slider.is(':hidden')) {
        menu_slider.removeAttr('style');
    }
});

$("ul.acitem").parent()
  .addClass("result");

 $(".result").prepend("<span class='arrow_left-menu'></span>");
 
