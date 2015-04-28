'use strict';

 jQuery(document).ready(function ($) {

    var lastId,
        topMenu = $(".subnav"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            return item;
            //if (item.length) {
            //    return item;
            //}
        });
    /*console.log("scrollItems: " + scrollItems.length);
    console.log("menuItems: " + menuItems.length);*/
    console.log("First: " + $(menuItems.eq(0)).attr("href").substr(1));
    //console.log("First: " + scrollItems.eq(0)).attr("href"));
    $(window).scroll(function () {

    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight + 10;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top - 300 < fromTop)
            return this;
    });
    

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
    });

    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 200;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
    });
  });
