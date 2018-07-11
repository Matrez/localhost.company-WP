jQuery(function($){
    $(function(){
        $(".showcase-button").click(function(e){ // click event for load more
            e.preventDefault();
            $(".showcase-project:hidden").slice(0, 4).show(); // select next 3 hidden divs and show them
            if($(".showcase-project:hidden").length == 0){ // check if any hidden divs still exist
                $(".showcase-button").hide();
            }
        });
    });
});