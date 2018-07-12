jQuery(function($){
    $(function(){
        $(".showcase-button").click(function(e){ // click event for load more
            e.preventDefault();
            $(".showcase-project:hidden").slice(0, 4).addClass("animated fadeInDown");
            $(".showcase-project:hidden").slice(0, 4).show();
            if($(".showcase-project:hidden").length == 0){
                $(".showcase-button").hide();
            }
        });
    });
});