/* showcase script */
jQuery(function ($) {
    $(function () {
        $(".showcase-button").click(function (e) { // click event for load more
            e.preventDefault();
            $(".showcase-project:hidden").slice(0, 4).addClass("animated fadeInUp");
            $(".showcase-project:hidden").slice(0, 4).show();
            if ($(".showcase-project:hidden").length == 0) {
                $(".showcase-button").hide();
            }
        });
    });
});

/* published by */
jQuery(function ($) {
    $(".post-author .label").each(function () {
        if ($(this).text().indexOf("Published") !== -1) {
            $(this).text("by")
        }
    })
});

/* blog reorder head with title */
jQuery(function ($) {
    $('.post-desc > .post-title').each(function () {
        let previous = $(this).prev();
        $(this).insertBefore(previous);
    });
});

/* insert arrow icon instead of document icon */
jQuery(function ($) {
    $('.icon-doc-text').each(function () {
        $(this).removeClass('icon-doc-text').addClass('fas fa-angle-double-right');
    });
});

/* arrow reorder before read more */
jQuery(function ($) {
    $('.post-more').each(function () {
        let previous = $(this).prev();
        $(this).insertBefore(previous);
    });
});

/* add hover effect on read more */
jQuery(function ($) {
    $('.post-links').each(function () {
        $(this).addClass('hvr-underline-from-left');
    });
});

/* add another person icon */
/*jQuery(function ($) {
    $('.icon-user').each(function () {
        $(this).removeClass('icon-user').addClass();
    });
});*/