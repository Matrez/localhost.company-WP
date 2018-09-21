/* showcase script */
jQuery(function ($) {
    $(function () {
        $(".showcase-button").click(function (e) {
            e.preventDefault();
            var hiddenProjects = $(".showcase-project:hidden");
            $(".showcase-project:hidden").slice(0, 4).addClass("animated fadeInUp");
            $(".showcase-project:hidden").slice(0, 4).show();
            $("html, body").animate({
                scrollTop: $(hiddenProjects[0]).offset().top - 180
            }, 500);
            if ($(".showcase-project:hidden").length == 0) {
                $(".showcase-button").closest("section").hide();
                $(".interested-button").attr("style", "display: inline-block;");
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
        var previous = $(this).prev();
        $(this).insertBefore(previous);
    });
});

/* arrow reorder before read more */
jQuery(function ($) {
    $('.post-more').each(function () {
        var previous = $(this).prev();
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
jQuery(function ($) {
    $('.icon-user').each(function () {
        $(this).removeClass('icon-user').addClass('far fa-user');
    });
});

/* add magnifier icon to search bar */
jQuery(function ($) {
    $('#searchform input.field').attr("placeholder", $.parseHTML("&#xf002;")[0].data);
});

/* scroll to top of job positions */
jQuery(function ($) {
    $('.jobsButton').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#jobsAnotation').offset().top - 25
        }, 750);
    })
});

/* edit visual name of uploaded image on button */
document.querySelector('.wpcf7-file').onchange = function () {
    let path = this.value;
    path = path.replace(/.*[\/\\]/, '');
    if (path !== '') {
        let changedElement = document.querySelector('.changedText');
        changedElement.innerHTML = path;
    }
};