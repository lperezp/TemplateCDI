$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $("#btn-sign-out").on("mouseover",function(){
        $("#sign-out").removeClass("hover");
    })

    $("#btn-sign-out").on("mouseout",function(){
        $("#sign-out").addClass("hover");
    })

});
